"use client";
import { useState } from "react";
import { FormSubmit } from "./components/ui/FormSubmit/FormSubmit";
import { Modal } from "./components/ui/Modal/Modal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormSubmit />
      </Modal>
      <Header openModal={openModal} />
      <Main>
        <HeroSection openModal={openModal} />
        <DentistSection />
        <MedicalSection />
        <VacancySection />
        <CandidateSection />
        <ReviewsSection />
      </Main>
      <Footer openModal={openModal} />
    </>
  );
}
