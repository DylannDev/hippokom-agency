import Hero from "@/components/homepage/hero";
import { ProblemsSection } from "@/components/homepage/problems-section";
import { SolutionSection } from "@/components/homepage/solution-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { MethodSection } from "@/components/homepage/method-section";
import AchievementsSection from "@/components/homepage/achievements-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import BlogSection from "@/components/homepage/blog-section";
import { Faq } from "@/components/homepage/faq";
import { faqHomepage } from "@/data";
import FounderSection from "@/components/homepage/founder-section";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-background">
        <Hero />
      </div>
      <ProblemsSection />
      <ServicesSection />
      <SolutionSection />
      <div className="max-w-7xl mx-auto px-5">
        <MethodSection />
      </div>
      <AchievementsSection />
      <FounderSection />
      <TestimonialsSection />
      <Faq data={faqHomepage} />
      <div className="max-w-7xl mx-auto">
        <BlogSection />
      </div>
    </main>
  );
}
