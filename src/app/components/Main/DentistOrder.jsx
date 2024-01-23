"use client";
import { useState } from "react";
import { Modal } from "../ui/Modal/Modal";
import { FormSubmit } from "../ui/FormSubmit/FormSubmit";

export const DentistOrder = ({ name }) => {
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
        <FormSubmit doctor={name} />
      </Modal>
      <div>
        <div className="py-5 px-5 bg-[#F4F7FB] rounded max-w-56 min-h-[91px] mb-4 relative before:block before:absolute before:bg-blue before:w-1 before:h-full before:top-0 before:left-0">
          <p className="text-base font-normal">{name}</p>
          <p
            className="text-[15px] font-bold text-blue underline cursor-pointer"
            onClick={openModal}
          >
            Подать заявку
          </p>
        </div>
      </div>
    </>
  );
};
