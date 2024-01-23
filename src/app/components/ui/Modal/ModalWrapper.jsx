"use client";

import { Modal } from "./Modal";
import { useState } from "react";

export const ModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-5 w-5 bg-black15" onClick={openModal}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        123
      </Modal>
    </div>
  );
};
