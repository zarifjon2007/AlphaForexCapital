import Header from "@/components/Header"
import PromoBanner from "@/components/PromoBanner"
import AnniversaryPromoSection from "@/components/AnniversaryPromoSection"
import HeroSection from "@/components/HeroSection"
import FeaturesBar from "@/components/FeaturesBar"
import WhyChooseSection from "@/components/WhyChooseSection"
import FundingOfferSection from "@/components/FundingOfferSection"
import RealTradersSection from "@/components/RealTradersSection"
import BatchesSection from "@/components/BatchesSection"
import PlatformSection from "@/components/PlatformSection"
import AccountAnalyticsSection from "@/components/AccountAnalyticsSection"
import FeatureCardsSection from "@/components/FeatureCardsSection"
import TradingPotentialSection from "@/components/TradingPotentialSection"
import FlexibleTradingSection from "@/components/FlexibleTradingSection"
import ProfitTargetsSection from "@/components/ProfitTargetsSection"
import SupportFeaturesSection from "@/components/SupportFeaturesSection"
import OnboardingSection from "@/components/OnboardingSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import FairRulesSection from "@/components/FairRulesSection"
import TransparencySection from "@/components/TransparencySection"
import AnimatedSection from "@/components/AnimatedSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <HeroSection />
      <PromoBanner />
      <AnniversaryPromoSection />
      <FeaturesBar />
      <WhyChooseSection />
      <FundingOfferSection />
      <RealTradersSection />
      <PlatformSection />
      <FairRulesSection />
      <FeatureCardsSection />
      <TradingPotentialSection />
      <FlexibleTradingSection />
      <ProfitTargetsSection />
      <TransparencySection />
      <SupportFeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
