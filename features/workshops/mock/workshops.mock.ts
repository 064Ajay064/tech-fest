import { Workshop } from '@/types/workshop.types'

export const workshopsMock: Workshop[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Fundamentals',
    instructor: 'Dr. Sarah Chen',
    date: 'March 15, 2026',
    time: '10:00 AM - 2:00 PM',
    description: 'Dive into the world of artificial intelligence and machine learning with hands-on projects using Python and TensorFlow.',
    category: 'AI & ML',
    capacity: 50,
    registered: 35,
    level: 'Beginner',
    prerequisites: ['Basic Python knowledge'],
    tags: ['AI', 'ML', 'Python', 'TensorFlow']
  },
  {
    id: '2',
    title: 'Cybersecurity Essentials',
    instructor: 'Prof. Michael Torres',
    date: 'March 16, 2026',
    time: '2:00 PM - 6:00 PM',
    description: 'Learn the fundamentals of cybersecurity and protect digital assets from modern threats and vulnerabilities.',
    category: 'Security',
    capacity: 40,
    registered: 28,
    level: 'Intermediate',
    prerequisites: ['Basic networking knowledge'],
    tags: ['Security', 'Ethical Hacking', 'Network Security']
  },
  {
    id: '3',
    title: 'Blockchain Revolution',
    instructor: 'Ms. Priya Sharma',
    date: 'March 17, 2026',
    time: '10:00 AM - 4:00 PM',
    description: 'Explore blockchain technology and its applications in modern business, from cryptocurrencies to smart contracts.',
    category: 'Blockchain',
    capacity: 45,
    registered: 22,
    level: 'Intermediate',
    prerequisites: ['Basic programming knowledge'],
    tags: ['Blockchain', 'Cryptocurrency', 'Smart Contracts']
  },
  {
    id: '4',
    title: 'Full Stack Modern Web Development',
    instructor: 'Mr. Alex Johnson',
    date: 'March 18, 2026',
    time: '9:00 AM - 5:00 PM',
    description: 'Build modern web applications using the latest frameworks including React, Node.js, and cloud deployment.',
    category: 'Web Dev',
    capacity: 60,
    registered: 45,
    level: 'Advanced',
    prerequisites: ['HTML', 'CSS', 'JavaScript'],
    tags: ['React', 'Node.js', 'Full Stack', 'Cloud']
  },
  {
    id: '5',
    title: 'Data Science with Python',
    instructor: 'Dr. Emily Rodriguez',
    date: 'March 19, 2026',
    time: '11:00 AM - 3:00 PM',
    description: 'Master data analysis and visualization techniques using Python, Pandas, and Matplotlib.',
    category: 'AI & ML',
    capacity: 55,
    registered: 30,
    level: 'Intermediate',
    prerequisites: ['Python basics', 'Statistics'],
    tags: ['Data Science', 'Python', 'Pandas', 'Visualization']
  },
  {
    id: '6',
    title: 'IoT Security Workshop',
    instructor: 'Prof. David Kim',
    date: 'March 20, 2026',
    time: '1:00 PM - 5:00 PM',
    description: 'Learn about securing Internet of Things devices and networks from emerging cyber threats.',
    category: 'Security',
    capacity: 35,
    registered: 18,
    level: 'Advanced',
    prerequisites: ['Networking', 'Basic security concepts'],
    tags: ['IoT', 'Security', 'Embedded Systems']
  }
]