import { useState } from "react";

export default function useModal(initialValue = false) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
}
