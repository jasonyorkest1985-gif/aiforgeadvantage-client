/**
 * Home — AI Forge Advantage
 * Design: Industrial Dark Tech / Forge Aesthetic
 * Assembles all sections in order matching the screenshots.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ChatbotDemo from "@/components/ChatbotDemo";
import ProcessSection from "@/components/ProcessSection";
import ScopeSection from "@/components/ScopeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import LocalSection from "@/components/LocalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ForgeBot from "@/components/ForgeBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ChatbotDemo />
      <ProcessSection />
      <ScopeSection />
      <TestimonialsSection />
      <PricingSection />
      <LocalSection />
      <CTASection />
      <Footer />
      <ForgeBot />
    </div>
  );
}
