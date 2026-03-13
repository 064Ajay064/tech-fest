import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import Statistics from '@/components/home/Statistics'
import EventsGrid from '@/components/events/EventsGrid'
import Schedule from '@/components/schedule/Schedule'
import SpeakersGrid from '@/components/speakers/SpeakersGrid'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import RegistrationForm from '@/components/registration/RegistrationForm'
import ContactSection from '@/components/contact/ContactSection'
import AboutSection from '@/components/home/AboutSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background-deep text-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <Statistics />
        <EventsGrid />
        <Schedule />
        <SpeakersGrid />
        <GalleryGrid />
        <RegistrationForm />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}