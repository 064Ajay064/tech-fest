'use client'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Container from '@/components/shared/Container'
import RegisterForm from '@/features/registration/components/RegisterForm'
import ContactCard from '@/features/registration/components/ContactCard'
import SocialLinks from '@/features/registration/components/SocialLinks'
import MapCard from '@/features/registration/components/MapCard'
import { contactCards } from '@/features/registration/mock/registerData'
import PageTransition from '@/components/shared/PageTransition'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function RegisterPage() {
  return (
    <div className="min-h-screen text-white relative flex flex-col selection:bg-primary selection:text-white">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-background-dark">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(152, 6, 249, 0.15), transparent),
            radial-gradient(at 100% 100%, rgba(6, 249, 249, 0.1), transparent)
          `
        }}></div>
      </div>

      <Header />

      <main className="flex-grow pt-32 pb-20 overflow-hidden">
        <PageTransition>
          <Container>
            {/* Hero Section */}
            <section className="text-center mb-20">
              <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter leading-none">
                JOIN THE <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic drop-shadow-[0_0_30px_rgba(152,6,249,0.5)]">
                  FUTURE
                </span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                Be a part of the most anticipated technical symposium of the year. 
                Connect, compete, and innovate.
              </p>
            </section>

            {/* Main Layout: Form & Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Registration Form */}
              <ScrollReveal delay={0.2} direction="right">
                <RegisterForm />
              </ScrollReveal>

              {/* Right: Contact Information */}
              <div className="space-y-6">
                <ScrollReveal delay={0.3} direction="left">
                  <h2 className="text-xs font-black text-primary-light tracking-[0.3em] mb-10 uppercase">
                    CONTACT INFORMATION
                  </h2>
                  
                  <div className="space-y-6">
                    {contactCards.map((card, idx) => (
                      <ContactCard key={idx} contact={card} />
                    ))}
                  </div>

                  <SocialLinks />
                </ScrollReveal>

                {/* Map Card */}
                <ScrollReveal delay={0.4} direction="up">
                  <MapCard />
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </PageTransition>
      </main>

      <Footer />
    </div>
  )
}
