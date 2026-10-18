import { Project, Skill, TechItem, EducationItem, HobbyItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Chandraditya Sati',
  greeting: 'Available for opportunities',
  taglineRole: 'AI Engineer',
  typedRoles: [
    'AI Engineer',
    'Python Developer',
    'ML Enthusiast',
    'IoT Builder',
    'Tabla Visharad',
  ],
  bioLead: 'A passionate AI Engineer blending Machine Learning, IoT, and modern web technologies to craft impactful solutions.',
  bioTabla: 'Also a trained tabla artist where precision meets creativity.',
  aboutLead: "Hello! I'm Chandraditya Sati — an ECE student at Bipin Tripathi Kumaon Institute of Technology with a deep passion for Python, Machine Learning, and intelligent systems that create real-world impact.",
  aboutBody: "Beyond code, I express creativity through tabla, a classical Indian percussion instrument where I hold a Visharad degree. This balance of logic and art defines everything I create.",
  location: 'Haldwani, Uttarakhand - 263139',
  phone: '+91 94109 59664',
  email: 'chandradityasati@gmail.com',
  github: 'https://github.com/ChandradityaSati',
  linkedin: 'https://www.linkedin.com/in/chandraditya-sati-30490b293/',
  instagram: 'https://www.instagram.com/_chandraditya_sati_/',
  resumeUrl: '/CV/MY RESUME.pdf',
  photoUrl: '/IMAGES/PHOTO.png',
};

export const STATS = [
  { target: 3, label: 'Projects Built' },
  { target: 5, label: 'Tech Stacks' },
  { target: 3, label: 'Years Learning' },
  { target: 1, label: 'Visharad Certification' },
];

export const ABOUT_TAGS = [
  'Python',
  'Machine Learning',
  'TensorFlow',
  'Arduino',
  'DSA',
  'React',
  'Firebase',
  'Tabla Visharad',
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'btkit',
    year: '2023 – 2027',
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Bipin Tripathi Kumaon Institute of Technology (BTKIT)',
    affiliation: 'Uttarakhand Technical University (UTU) • AICTE Approved Govt. Institute',
    location: 'Dwarahat, Almora, Uttarakhand',
    score: '65%',
    scoreBadge: 'Current Aggregate',
    statusBadge: 'In Progress (3rd Year)',
    logo: '/IMAGES/btkit_logo.png',
    logoAlt: 'BTKIT Dwarahat Crest Logo',
    websiteUrl: 'https://kecua.ac.in',
    highlights: [
      'Core focus on Embedded Systems, Microcontrollers & IoT architectures',
      'Machine Learning pipelines, Signal Processing, and Neural Networks',
      'Digital circuits, Hardware-Software Co-design & Algorithm design',
    ],
  },
  {
    id: 'nirmala',
    year: '2021 – 2023',
    degree: 'Senior Secondary Education — Class XII (PCM)',
    school: 'Nirmala Convent Senior Secondary School',
    affiliation: 'Central Board of Secondary Education (CBSE)',
    location: 'Kathgodam, Nainital, Uttarakhand',
    score: '84%',
    scoreBadge: 'Board Exam Aggregate',
    statusBadge: 'First Division with Distinction',
    logo: '/IMAGES/nirmala_logo.png',
    logoAlt: 'Nirmala Convent Senior Secondary School Crest Logo',
    websiteUrl: 'https://www.nirmalaconventkgm.com',
    highlights: [
      'Physics, Chemistry, Mathematics (PCM) with Computer Science',
      'Strong foundations in Mathematics, Analytical Reasoning & Computing',
      'Active representation in classical arts, percussion (Tabla) & academics',
    ],
  },
];

export const HOBBIES: HobbyItem[] = [
  {
    icon: '🥁',
    title: 'Playing Tabla — Visharad',
    description: 'Classical Indian percussion, trained at a formal institution',
  },
  {
    icon: '🎵',
    title: 'Music Production and Covers',
    description: 'Composing, remixing, and blending genres',
  },
  {
    icon: '🤖',
    title: 'AI and ML Exploration',
    description: 'Researching and building intelligent systems',
  },
  {
    icon: '💻',
    title: 'Coding and DSA Problem-Solving',
    description: 'LeetCode, algorithmic thinking, clean code',
  },
  {
    icon: '📚',
    title: 'Teaching and Mentoring',
    description: 'Sharing knowledge and helping others grow',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'Python',
    icon: 'fab fa-python',
    iconType: 'svg',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    desc: 'Proficient in Python for scripting, data analysis, automation, and AI/ML pipelines.',
    proficiency: 85,
  },
  {
    name: 'Machine Learning',
    icon: 'fas fa-brain',
    iconType: 'svg',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    desc: 'Experience with TensorFlow, Scikit-learn, Keras, building and training neural networks.',
    proficiency: 75,
  },
  {
    name: 'Data Structures and Algorithms',
    icon: 'fas fa-code',
    iconType: 'svg',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    desc: 'Strong problem-solving foundation with arrays, trees, graphs, dynamic programming.',
    proficiency: 70,
  },
  {
    name: 'IoT and Arduino',
    icon: 'fas fa-microchip',
    iconType: 'svg',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
    desc: 'Building embedded systems with Arduino, Raspberry Pi, sensors and GSM modules.',
    proficiency: 72,
  },
  {
    name: 'Web Development',
    icon: 'fas fa-globe',
    iconType: 'svg',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    desc: 'HTML, CSS, JavaScript, React, building responsive, modern, dynamic web applications.',
    proficiency: 78,
  },
  {
    name: 'Music Production',
    icon: 'fas fa-music',
    iconType: 'svg',
    logoUrl: 'https://img.icons8.com/color/96/audio-wave--v1.png',
    desc: 'Composing, remixing and producing music, combining technical and creative disciplines.',
    proficiency: 80,
  },
];

export const TECH_ITEMS: TechItem[] = [
  {
    name: 'Python',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'TensorFlow',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'React',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Firebase',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Git',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'Arduino',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
  },
  {
    name: 'Scikit-learn',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  },
  {
    name: 'HTML & CSS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'GitHub',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
    isLight: true,
  },
  {
    name: 'C++',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'MongoDB',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'music-genre-classifier',
    title: 'Music Genre Classifier',
    category: 'AI / Machine Learning',
    status: 'In Progress',
    description: 'Predicts music genres by analyzing raw audio signals using Mel-Frequency Cepstral Coefficients (MFCC) and a deep neural network trained on the GTZAN dataset.',
    image: '/IMAGES/ai_music_project.png',
    tags: ['TensorFlow', 'Python', 'Scikit-learn', 'Librosa'],
    githubUrl: 'https://github.com/ChandradityaSati',
  },
  {
    id: 'music-training-platform',
    title: 'Music Training Platform',
    category: 'Full-Stack Web Development',
    status: 'In Progress',
    description: 'An interactive online platform for classical music education featuring course listings, teacher profiles, class bookings, and student dashboards.',
    image: '/IMAGES/music_website_project.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ChandradityaSati',
  },
  {
    id: 'arduino-security-system',
    title: 'Arduino Security System',
    category: 'IoT / Embedded Systems',
    status: 'In Progress',
    description: 'A smart security system using Arduino, PIR motion sensors, and GSM module to detect intrusions, trigger alarms, and send real-time SMS alerts.',
    image: '/IMAGES/security_system_project.png',
    tags: ['Arduino', 'C++', 'IoT', 'GSM Module'],
    githubUrl: 'https://github.com/ChandradityaSati',
  },
];
