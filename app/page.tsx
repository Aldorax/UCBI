import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import FAQSection from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import ServicesSection from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import Roadmap from "@/components/layout/sections/timeline";

export const metadata = {
  title: "UCBI Banking | Blockchain Data Banking",
  description: "Blockchain Data Banking",
  openGraph: {
    type: "website",
    url: "https://ucbi-draft.vercel.app",
    title: "UCBI Banking | Blockchain Data Banking",
    description: "Blockchain Data Banking",
    images: [
      {
        url: "https://ucbibanking.io/public/frontend/images/quality_img/about.jpg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      <Roadmap />
      <TeamSection />
      <CommunitySection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
