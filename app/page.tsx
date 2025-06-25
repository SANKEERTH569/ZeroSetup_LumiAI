import HeroSection from "@/components/hero-section"
import { WhatIsZeroSetup } from "@/components/what-is-zerosetup"
import { HowItWorks } from "@/components/how-it-works"
import { AIAgent } from "@/components/ai-agent"
import { WhyDevelopersLove } from "@/components/why-developers-love"
import { UseCases } from "@/components/use-cases"
import { Testimonials } from "@/components/testimonials"
import { BuiltByLumi } from "@/components/built-by-lumi"
import { JoinBeta } from "@/components/join-beta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <WhatIsZeroSetup />
      <HowItWorks />
      <AIAgent />
      <WhyDevelopersLove />
      <UseCases />
      <Testimonials />
      <BuiltByLumi />
      <JoinBeta />
      <Footer />
    </main>
  )
}
