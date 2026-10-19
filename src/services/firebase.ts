import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDocs,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { ContactMessage } from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "portfolio",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

const appId = firebaseConfig.appId || 'portfolio';
const COLLECTION_PATH = `/artifacts/${appId}/public/data/messages`;
const LOCAL_STORAGE_KEY = 'chandraditya_portfolio_messages';

let app: any = null;
let db: any = null;
let auth: any = null;

if (firebaseConfig.apiKey) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    auth = getAuth(app);
  } catch (err) {
    console.warn('Firebase initialization warning:', err);
  }
}

// Local storage fallback helpers
function getLocalMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalMessages(msgs: ContactMessage[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(msgs));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
}

export async function submitContactMessage(messageData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const localId = 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newMsg: ContactMessage = {
    id: localId,
    name: messageData.name,
    email: messageData.email,
    subject: messageData.subject,
    message: messageData.message,
    timestamp: new Date().toISOString(),
  };

  // Always store in local mirror
  const current = getLocalMessages();
  saveLocalMessages([newMsg, ...current]);

  // Attempt Firestore write
  if (db) {
    try {
      await addDoc(collection(db, COLLECTION_PATH), {
        ...messageData,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.warn('Firestore write failed, stored locally:', err);
    }
  }
}

export function subscribeToMessages(callback: (messages: ContactMessage[]) => void) {
  let unsubscribeFirestore = () => {};

  const emitMerged = (firestoreMsgs: ContactMessage[] = []) => {
    const localMsgs = getLocalMessages();
    const map = new Map<string, ContactMessage>();

    // Add local messages
    localMsgs.forEach((m) => {
      if (m.id) map.set(m.id, m);
    });

    // Add firestore messages (overwrite or append)
    firestoreMsgs.forEach((m) => {
      if (m.id) map.set(m.id, m);
    });

    const merged = Array.from(map.values()).sort((a, b) => {
      const tA = new Date(a.timestamp || 0).getTime();
      const tB = new Date(b.timestamp || 0).getTime();
      return tB - tA;
    });

    callback(merged);
  };

  // Emit current local immediately
  emitMerged([]);

  if (db) {
    try {
      const messagesRef = collection(db, COLLECTION_PATH);
      unsubscribeFirestore = onSnapshot(
        messagesRef,
        (snapshot) => {
          const list: ContactMessage[] = [];
          snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            list.push({
              id: docSnapshot.id,
              name: data.name || 'Anonymous',
              email: data.email || 'N/A',
              subject: data.subject || '',
              message: data.message || '',
              timestamp: data.timestamp?.toDate
                ? data.timestamp.toDate().toISOString()
                : data.timestamp || new Date().toISOString(),
            });
          });
          emitMerged(list);
        },
        (error) => {
          console.warn('Firestore snapshot error, falling back to local store:', error);
          emitMerged([]);
        }
      );
    } catch (e) {
      console.warn('Could not listen to Firestore:', e);
    }
  }

  return () => {
    unsubscribeFirestore();
  };
}

export async function deleteContactMessage(id: string): Promise<void> {
  // Remove from local storage
  const local = getLocalMessages().filter((m) => m.id !== id);
  saveLocalMessages(local);

  // Attempt Firestore delete
  if (db && id && !id.startsWith('msg_')) {
    try {
      await deleteDoc(doc(db, COLLECTION_PATH, id));
    } catch (err) {
      console.warn('Firestore delete failed:', err);
    }
  }
}

export async function deleteAllContactMessages(): Promise<void> {
  // Clear local
  saveLocalMessages([]);

  // Attempt Firestore batch delete
  if (db) {
    try {
      const messagesRef = collection(db, COLLECTION_PATH);
      const snapshot = await getDocs(messagesRef);
      const batch = writeBatch(db);
      snapshot.forEach((docSnapshot) => {
        batch.delete(docSnapshot.ref);
      });
      await batch.commit();
    } catch (err) {
      console.warn('Firestore delete all failed:', err);
    }
  }
}

export async function adminSignIn(email: string, password: string): Promise<User | { email: string }> {
  // If Firebase Auth is available
  if (auth) {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      return credential.user;
    } catch (err: any) {
      // If user uses demo credentials or default admin credentials
      if (email.toLowerCase() === 'admin@devcsx.com' && password === 'admin123') {
        const dummyUser = { email: 'admin@devcsx.com' };
        localStorage.setItem('chandraditya_admin_auth', JSON.stringify(dummyUser));
        return dummyUser;
      }
      throw err;
    }
  }

  // Fallback demo auth
  if (email.toLowerCase() === 'admin@devcsx.com' && password === 'admin123') {
    const dummyUser = { email: 'admin@devcsx.com' };
    localStorage.setItem('chandraditya_admin_auth', JSON.stringify(dummyUser));
    return dummyUser;
  }
  throw new Error('Invalid email or password.');
}

export async function adminSignOut(): Promise<void> {
  localStorage.removeItem('chandraditya_admin_auth');
  if (auth) {
    try {
      await signOut(auth);
    } catch (err) {
      console.warn('Sign out error:', err);
    }
  }
}

export function subscribeToAuth(callback: (user: any | null) => void) {
  const localAuth = localStorage.getItem('chandraditya_admin_auth');
  if (localAuth) {
    try {
      callback(JSON.parse(localAuth));
    } catch {
      callback(null);
    }
  }

  if (!auth) {
    return () => {};
  }

  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      const fallback = localStorage.getItem('chandraditya_admin_auth');
      callback(fallback ? JSON.parse(fallback) : null);
    }
  });
}
