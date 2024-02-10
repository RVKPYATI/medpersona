"use client";

import { CandidateSection } from "./components/Main/CandidateSection";
import { DentistSection } from "./components/Main/DentistSection";
import { HeroSection } from "./components/Main/HeroSection";

import { MedicalSection } from "./components/Main/MedicalSection";
import { ReviewsSection } from "./components/Main/ReviewsSection";
import { VacancySection } from "./components/Main/VacancySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DentistSection />
      <MedicalSection />
      <VacancySection />
      <CandidateSection />
      <ReviewsSection />
    </>
  );
}
