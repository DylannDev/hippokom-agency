import Hero from "@/components/homepage/hero";
import { ProblemsSection } from "@/components/homepage/problems-section";
import { SolutionSection } from "@/components/homepage/solution-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { MethodSection } from "@/components/homepage/method-section";
import AchievementsSection from "@/components/homepage/achievements-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import { ContactSection } from "@/components/homepage/contact-section";
import BlogSection from "@/components/homepage/blog-section";
import { Faq } from "@/components/homepage/faq";
import { faqHomepage } from "@/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemsSection />
      <div className="max-w-7xl mx-auto">
        <SolutionSection />
        <ServicesSection />
        <MethodSection />
      </div>
      <AchievementsSection />
      <div className="max-w-7xl mx-auto">
        <TestimonialsSection />
        <Faq data={faqHomepage} />
      </div>
      <BlogSection />
      {/* <ContactSection /> */}
    </main>
  );
}
