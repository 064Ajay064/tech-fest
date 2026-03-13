import { ContactInfo } from '../types/register.types';

export const departments = [
  'Computer Science & Engineering',
  'Information Technology',
  'Artificial Intelligence & Data Science',
  'Electronics & Communication',
  'Mechanical Engineering'
];

export const eventOptions = [
  'Hackathon',
  'Paper Presentation',
  'Coding Battle',
  'Robotics'
];

export const contactCards: ContactInfo[] = [
  {
    icon: 'location_on',
    title: 'SNS College of Technology',
    accent: 'cyan',
    description: [
      'SNS Kalvi Nagar',
      'Sathy Main Road',
      'Saravanampatti Post',
      'Coimbatore - 641035',
      'Tamil Nadu'
    ]
  },
  {
    icon: 'call',
    title: 'Phone',
    accent: 'purple',
    description: [
      '+91 422 266 6226',
      '+91 98765 43210'
    ]
  },
  {
    icon: 'mail',
    title: 'Email',
    accent: 'cyan',
    description: [
      'techfest@snsct.org',
      'admissions@snsgroups.com'
    ]
  }
];
