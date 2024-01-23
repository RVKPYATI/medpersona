"use client";
import { useState } from "react";
import MaskedInput from "react-text-mask";
import { Button } from "../Button/Button";
import Image from "next/image";

export const FormSubmit = ({ doctor }) => {
  const [res, setRes] = useState(false);
  const [nameFile, setNameFile] = useState();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    resume: null,
    doctor: doctor,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setNameFile(files[0].name);
      // Handle file input separately
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      // Handle other inputs
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("resume", formData.resume); // Append the file
      formDataToSend.append("doctor", formData.doctor); // Append the file

      const response = await fetch("/api/telegram", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Request sent successfully!");
        setRes(true);
        // Additional actions on successful request
      } else {
        console.error("Failed to send request");
        // Additional actions in case of an error
      }
    } catch (error) {
      console.error("Error while sending request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        className="w-full  h-12 rounded py-3 px-5 border border-[#707070] placeholder:text-[#707070] outline-none mb-2"
        placeholder="Ваше имя"
        required
      />

      <MaskedInput
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        className="w-full   h-12 rounded py-3 px-5 border border-[#707070] placeholder:text-[#707070] outline-none mb-2"
        placeholder="Номер вашего телефона"
        mask={[
          "+",
          "7",
          " ",
          "(",
          /\d/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
      />

      <label
        htmlFor="inputFile"
        className="w-full  flex justify-between items-center  border border-[#707070] h-12 rounded py-3 px-5 outline-none bg-[#FFFFFF] text-[#707070] mb-2"
      >
        Прикрепить резюме
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.03609 17.7124C2.27306 17.7124 1.54045 17.3966 0.956578 16.8122C-0.338015 15.5133 -0.338015 13.4009 0.95628 12.1029L11.0509 1.38336C12.6259 -0.194175 15.0385 -0.0524249 16.7991 1.71045C17.588 2.50076 18.0307 3.64011 18.0141 4.83767C17.9975 6.02259 17.5346 7.15658 16.7434 7.94914L9.1142 16.0711C8.90186 16.2986 8.54579 16.309 8.31912 16.0956C8.093 15.8818 8.08203 15.5252 8.29522 15.2985L15.9359 7.16417C16.5336 6.56539 16.8764 5.716 16.8891 4.8219C16.9017 3.92726 16.5786 3.08378 16.0037 2.5075C14.9237 1.42525 13.1653 0.858526 11.8581 2.16887L1.76371 12.8884C0.895776 13.7586 0.896057 15.1562 1.75246 16.0148C2.15407 16.4167 2.63079 16.6124 3.13845 16.5818C3.64076 16.5511 4.15713 16.2935 4.59251 15.857L12.6244 7.30812C12.9155 7.01646 13.5005 6.30152 12.9051 5.70471C12.5679 5.36693 12.3311 5.38774 12.2532 5.39421C12.0307 5.4139 11.7709 5.56774 11.5011 5.8383L5.45566 12.268C5.2422 12.4949 4.88585 12.5059 4.66055 12.2919C4.43415 12.0787 4.42374 11.7215 4.63665 11.4954L10.6931 5.05362C11.1693 4.57521 11.6561 4.3159 12.1517 4.27146C12.5384 4.23713 13.1136 4.31955 13.7002 4.90793C14.571 5.78035 14.4627 7.06005 13.4317 8.09337L5.39971 16.6417C4.75846 17.2852 3.98416 17.6589 3.20735 17.7067C3.15026 17.7107 3.09316 17.7124 3.03607 17.7124L3.03609 17.7124Z"
            fill="#737373"
          />
        </svg>
      </label>
      {nameFile && <p>Выбранный файл: {nameFile}</p>}
      <input
        type="file"
        className="hidden"
        id="inputFile"
        name="resume"
        onChange={handleChange}
      />
      {res ? (
        <span className="flex gap-1 justify-center items-center">
          <Image src="/check.svg" width={32} height={32} alt="check" />
          Данные успешно отправлены
        </span>
      ) : (
        <Button title="Отправить" />
      )}
    </form>
  );
};
