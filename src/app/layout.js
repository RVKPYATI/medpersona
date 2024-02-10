"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Modal } from "./components/ui/Modal/Modal";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { FormSubmit } from "./components/ui/FormSubmit/FormSubmit";
import useModal from "./utils/useModal";
const manrope = Manrope({ subsets: ["latin"] });

// export const metadata = {
//   title: "КА МЕДПЕРСОНА",
//   description: "Кадровое агенство медперсона",
// };

export default function RootLayout({ children }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <html lang="en">
      <body className={manrope.className}>
        <>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <FormSubmit />
          </Modal>
          <Header openModal={openModal} />
          <Main>{children}</Main>
          <Footer openModal={openModal} />
        </>
      </body>
    </html>
  );
}
