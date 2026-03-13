import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import Statistics from '@/components/home/Statistics'
import { EventsGrid } from '@/features/events'
import Schedule from '@/components/schedule/Schedule'
import SpeakersGrid from '@/components/speakers/SpeakersGrid'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import RegistrationForm from '@/components/registration/RegistrationForm'
import ContactSection from '@/components/contact/ContactSection'
import AboutSection from '@/components/home/AboutSection'
import PageTransition from '@/components/shared/PageTransition'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function Home() {
  return (
    <div className="min-h-screen bg-background-deep text-white selection:bg-primary selection:text-white">
      <Header />
      <main className="overflow-hidden">
        <PageTransition>
          <HeroSection />
          
          <ScrollReveal delay={0.2}>
            <Statistics />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <EventsGrid />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Schedule />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SpeakersGrid />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GalleryGrid />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <RegistrationForm />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactSection />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <AboutSection />
          </ScrollReveal>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}