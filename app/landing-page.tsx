"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { DeveloperExperience } from "./components/developer-experience";
import { Hero } from "./components/hero";
import { SurveyCTA } from "./components/survey-cta";
import { FAQs } from "./components/faqs";

export function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <DeveloperExperience />
      <FAQs />
      <SurveyCTA />
      <Footer />
    </main>
  );
}
