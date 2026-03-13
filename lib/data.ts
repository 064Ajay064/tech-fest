export const events = [
  {
    id: 'hack-the-verse',
    title: 'Hack-The-Verse',
    description: 'A 24-hour marathon where developers build futuristic solutions for real-world problems.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    tag: 'HACKATHON',
    date: 'March 20, 2026',
    prize: '₹50,000'
  },
  {
    id: 'webathon',
    title: 'Webathon 2.0',
    description: 'Craft the next generation of web experiences using modern frameworks and cutting-edge UI/UX.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop',
    tag: 'WEB DEV',
    date: 'March 21, 2026',
    prize: '₹30,000'
  },
  {
    id: 'coding-contest',
    title: 'Algo-Warriors',
    description: 'Showcase your algorithmic prowess and speed in this high-intensity competitive programming showdown.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop',
    tag: 'CODING',
    date: 'March 20, 2026',
    prize: '₹20,000'
  }
]

export const workshops = [
  {
    id: 'ai-masterclass',
    title: 'Gen-AI Masterclass',
    speaker: 'Dr. Jane Smith',
    description: 'Deep dive into LLMs and Generative AI with industry experts from top tech firms.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    date: 'March 21, 2026'
  }
]

export const schedule = [
  {
    time: '09:00 AM',
    event: 'Inauguration Ceremony',
    location: 'Main Auditorium',
    type: 'General'
  },
  {
    time: '10:30 AM',
    event: 'Hackathon Begins',
    location: 'Open Arena',
    type: 'Technical'
  },
  {
    time: '11:00 AM',
    event: 'AI Workshop',
    location: 'L-102',
    type: 'Workshop'
  },
  {
    time: '01:00 PM',
    event: 'Lunch Break & Networking',
    location: 'Food Court',
    type: 'General'
  },
  {
    time: '02:00 PM',
    event: 'Robotics Challenge',
    location: 'Mini Hall',
    type: 'Technical'
  },
  {
    time: '04:30 PM',
    event: 'Day 1 Closing',
    location: 'Main Hall',
    type: 'General'
  }
]

export const speakers = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    designation: 'Lead AI Scientist',
    organization: 'NeuralCore',
    domain: 'Artificial Intelligence',
    bio: 'Pioneering research in multimodal AI systems and cognitive architectures for next-generation autonomous intelligence.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    socials: { linkedin: '#', github: '#', website: '#' }
  },
  {
    id: '2',
    name: 'Mark Chen',
    designation: 'Cybersecurity Expert',
    organization: 'CloudScale',
    domain: 'Cybersecurity',
    bio: 'Securing the decentralized future through advanced cryptographic protocols and zero-trust architecture design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    socials: { linkedin: '#', github: '#', website: '#' }
  },
  {
    id: '3',
    name: 'Alex Rivera',
    designation: 'Web3 Evangelist',
    organization: 'EtherNexus',
    domain: 'Web3 & Blockchain',
    bio: 'Building the foundation of the decentralized web with a focus on interoperability and user-centric blockchain solutions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    socials: { linkedin: '#', github: '#', website: '#' }
  },
  {
    id: '4',
    name: 'Elena Volkov',
    designation: 'Robotics Engineer',
    organization: 'Titan Dynamics',
    domain: 'Robotics',
    bio: 'Innovating in human-robot interaction and agile bipedal movement for industrial automation applications.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
    socials: { linkedin: '#', github: '#', website: '#' }
  },
  {
    id: '5',
    name: 'Dr. James Wilson',
    designation: 'Data Scientist',
    organization: 'QuantData',
    domain: 'Data Science',
    bio: 'Harnessing big data to drive predictable outcomes in healthcare and ecological sustainability.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    socials: { linkedin: '#', github: '#', website: '#' }
  }
]

export const gallery = [
  { id: '1', url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop', title: 'Main Stage' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop', title: 'Hackathon Crowd' },
  { id: '3', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop', title: 'Workshops' },
  { id: '4', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop', title: 'Award Ceremony' },
  { id: '5', url: 'https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=1000&auto=format&fit=crop', title: 'Robotics Arena' },
  { id: '6', url: 'https://images.unsplash.com/photo-1531050171651-71fb49c71e8b?q=80&w=1000&auto=format&fit=crop', title: 'Networking' }
]

export const stats = [
  { icon: '🎮', value: 40, label: 'UNIQUE EVENTS', suffix: '+' },
  { icon: '💰', value: 2, label: 'LAKHS PRIZE POOL', suffix: 'L+' },
  { icon: '👥', value: 1500, label: 'PARTICIPANTS', suffix: '+' }
]
