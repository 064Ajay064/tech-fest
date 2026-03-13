import { ScheduleItem } from '../types/schedule.types'

export const scheduleData: Record<string, ScheduleItem[]> = {
  'DAY 01': [
    {
      id: "opening",
      category: "Inauguration",
      title: "Opening Ceremony & Keynote",
      description: "Official launch of Techfest 2K26 with guest speakers and leadership.",
      time: "09:00 AM - 10:30 AM",
      location: "Main Auditorium",
      icon: "🎉",
      badge: "Protocol"
    },
    {
      id: "codeathon",
      category: "Technical",
      title: "Algorithm Masterclass: Code-A-Thon",
      description: "Competitive programming showdown with complex challenges.",
      time: "11:00 AM - 01:00 PM",
      location: "Computing Lab 4",
      icon: "💻",
      mentors: ["avatar1.jpg", "avatar2.jpg"]
    },
    {
      id: "genai",
      category: "Workshop",
      title: "Generative AI: Design to Reality",
      description: "Hands-on workshop using generative AI tools like Midjourney and Stable Diffusion.",
      time: "02:00 PM - 04:30 PM",
      location: "Smart Classroom 12",
      icon: "✨",
      badge: "Limited Seats"
    }
  ],
  'DAY 02': [
    {
      id: "robo-war",
      category: "Technical",
      title: "Robo-War Finale",
      description: "The ultimate showdown of mechanical gladiators for the championship title.",
      time: "10:00 AM - 01:00 PM",
      location: "Main Arena",
      icon: "🤖",
      prizePool: "50K"
    },
    {
      id: "valorant",
      category: "Non-Technical",
      title: "Cyber Siege: Valorant Open",
      description: "E-sports tournament featuring top student teams across the region.",
      time: "02:00 PM - 06:00 PM",
      location: "E-Sports Lounge",
      icon: "🎯",
      prizePool: "20K",
      teams: "16"
    },
    {
      id: "closing",
      category: "Ceremony",
      title: "Grand Valedictory",
      description: "Awards ceremony and official closing of SNS Techfest 2K26.",
      time: "06:30 PM - 08:00 PM",
      location: "Main Auditorium",
      icon: "🏆"
    }
  ]
}