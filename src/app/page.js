import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CandidateSection } from "./components/Main/CandidateSection";
import { DentistSection } from "./components/Main/DentistSection";
import { HeroSection } from "./components/Main/HeroSection";
import { Main } from "./components/Main/Main";
import { MedicalSection } from "./components/Main/MedicalSection";
import { ReviewsSection } from "./components/Main/ReviewsSection";
import { VacancySection } from "./components/Main/VacancySection";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <DentistSection />
        <MedicalSection />
        <VacancySection />
        <CandidateSection />
        <ReviewsSection />
      </Main>
      <Footer />
    </>
  );
}
