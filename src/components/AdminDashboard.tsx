import React, { useState, useEffect } from 'react';
import { ContactMessage } from '../types';
import {
  adminSignIn,
  adminSignOut,
  subscribeToAuth,
  subscribeToMessages,
  deleteContactMessage,
  deleteAllContactMessages,
} from '../services/firebase';

interface AdminDashboardProps {
  onBackToPortfolio: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPortfolio }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  // Monitor auth state
  useEffect(() => {
    const unsub = subscribeToAuth((user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // Monitor messages when authenticated
  useEffect(() => {
    if (!currentUser) return;
    const unsub = subscribeToMessages((msgs) => {
      setMessages(msgs);
    });
    return () => unsub();
  }, [currentUser]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginMessage('');
    setIsLoggingIn(true);

    try {
      const user = await adminSignIn(email, password);
      setCurrentUser(user);
    } catch (error: any) {
      console.error('Firebase authentication error:', error);
      let errorMessage = 'Login failed. Please check credentials or use admin@devcsx.com / admin123';
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential'
      ) {
        errorMessage = 'Invalid email or password.';
      }
      setLoginMessage(errorMessage);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await adminSignOut();
    setCurrentUser(null);
  };

  const handleDeleteOne = async (id?: string) => {
    if (!id) return;
    setIsDeleting(id);
    try {
      await deleteContactMessage(id);
    } catch (err) {
      console.error('Error deleting message:', err);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleDeleteAll = async () => {
    if (!window.confirm('Are you sure you want to delete all messages?')) return;
    setIsDeletingAll(true);
    try {
      await deleteAllContactMessages();
    } catch (err) {
      console.error('Error deleting all messages:', err);
    } finally {
      setIsDeletingAll(false);
    }
  };

  return (
    <div className="admin-overlay">
      <div className="section-inner" style={{ maxWidth: '850px' }}>
        {/* Navigation Bar for Admin */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <button
            type="button"
            onClick={onBackToPortfolio}
            className="btn-outline"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <i className="fas fa-arrow-left"></i> Return to Portfolio
          </button>

          {currentUser && (
            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: '#FEE2E2',
                color: '#DC2626',
                border: '1px solid #FECACA',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Logout ({currentUser.email || 'Admin'})
            </button>
          )}
        </div>

        {/* Login Section */}
        {!currentUser ? (
          <section
            id="login"
            className="admin-card"
            style={{
              maxWidth: '440px',
              margin: '3rem auto',
              padding: '2.5rem 2rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--clr-accent-subtle)',
                  color: 'var(--clr-accent)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                }}
              >
                <i className="fas fa-lock"></i>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--clr-text-main)',
                }}
              >
                Admin Inbox
              </h2>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--clr-text-muted)',
                  marginTop: '0.4rem',
                }}
              >
                Sign in to view and manage contact inquiries
              </p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--clr-text-muted)',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="admin@devcsx.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--clr-bg)',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '0.5rem',
                    color: 'var(--clr-text-main)',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--clr-text-muted)',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--clr-bg)',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '0.5rem',
                    color: 'var(--clr-text-main)',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn-primary"
                style={{
                  marginTop: '0.5rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {isLoggingIn ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Authenticating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt"></i> Login to Inbox
                  </>
                )}
              </button>
            </form>

            {loginMessage && (
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#FEE2E2',
                  border: '1px solid #FECACA',
                  color: '#DC2626',
                  textAlign: 'center',
                  fontSize: '0.85rem',
                }}
              >
                {loginMessage}
              </div>
            )}

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--clr-border)',
                textAlign: 'center',
                fontSize: '0.78rem',
                color: 'var(--clr-text-muted)',
              }}
            >
              Demo credentials: <code>admin@devcsx.com</code> / <code>admin123</code>
            </div>
          </section>
        ) : (
          /* Dashboard Section */
          <section id="dashboard">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.75rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    fontWeight: 600,
                    color: 'var(--clr-text-main)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                  }}
                >
                  Messages
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--clr-accent-subtle)',
                      border: '1px solid var(--clr-accent-border)',
                      color: 'var(--clr-accent)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {messages.length} inquiries
                  </span>
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--clr-text-muted)', marginTop: '0.25rem' }}>
                  Live messages submitted through the contact section
                </p>
              </div>

              {messages.length > 0 && (
                <button
                  type="button"
                  id="delete-all-btn"
                  onClick={handleDeleteAll}
                  disabled={isDeletingAll}
                  style={{
                    backgroundColor: '#FEE2E2',
                    color: '#DC2626',
                    fontWeight: 600,
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    border: '1px solid #FECACA',
                    cursor: isDeletingAll ? 'not-allowed' : 'pointer',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s',
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Delete All
                </button>
              )}
            </div>

            <div id="messages-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.length === 0 ? (
                <div
                  className="admin-card"
                  style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    color: 'var(--clr-text-muted)',
                  }}
                >
                  <i
                    className="fas fa-envelope-open"
                    style={{ fontSize: '2.5rem', color: 'var(--clr-border-strong)', marginBottom: '1rem' }}
                  ></i>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--clr-text-main)' }}>No messages yet</h3>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Messages submitted through the contact form will appear here in real time.
                  </p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="message-card"
                    style={{ position: 'relative' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: '1.15rem',
                          color: 'var(--clr-text-main)',
                        }}
                      >
                        From: {msg.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => handleDeleteOne(msg.id)}
                        disabled={isDeleting === msg.id}
                        aria-label="Delete message"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#DC2626',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          padding: '0.25rem',
                        }}
                      >
                        {isDeleting === msg.id ? (
                          <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                          <i className="fas fa-trash-alt"></i>
                        )}
                      </button>
                    </div>

                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--clr-accent)',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <a href={`mailto:${msg.email}`} style={{ textDecoration: 'underline' }}>
                        {msg.email}
                      </a>
                    </div>

                    {msg.subject && (
                      <div
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--clr-text-body)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Subject: {msg.subject}
                      </div>
                    )}

                    <p
                      style={{
                        color: 'var(--clr-text-body)',
                        lineHeight: 1.65,
                        marginBottom: '1rem',
                        fontSize: '0.94rem',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {msg.message}
                    </p>

                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--clr-text-muted)',
                        textAlign: 'right',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {msg.timestamp
                        ? new Date(msg.timestamp).toLocaleString()
                        : 'Just now'}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
