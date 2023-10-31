"use client";

import { Header } from "@/components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Survey } from "./components/survey";
import { Footer } from "@/components/footer";
import { Dialog } from "@/components/dialog";
import { Button } from "@/components/button";
import { SurveyForm } from "./components/survey-form";

export function LandingPage() {
  return (
    <main>
      <Header />
      <div className="my-10">
        <Hero />
        <Features />
      </div>
      <Footer />
    </main>
  );
}
