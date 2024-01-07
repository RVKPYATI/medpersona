import Image from "next/image";

export const Review = ({ image, date }) => {
  return (
    <div className="px-5 py-6 bg-[#FFFFFF] border-[#DFE6EF] rounded-lg h-[500px]">
      <Image src={image} width={119} height={114} alt="review1" />
      <p className="text-[19px] font-semibold text-[#000000] mb-2 mt-3">
        Название организации здесь пример текста
      </p>
      <p>
        Это тестовый контент, который не должен нести никакого смысла, лишь
        показать наличие самого текста и в деле. Тестовый контент, который не
        должен нести здесь смысла, лишь показать наличие самого текста или
        типографики в деле. Тестовый контент, который не должен нести здесь
        смысла, лишь показать наличие самого текста и в деле.
      </p>
      <p className="text-sm mt-2">{date}</p>
    </div>
  );
};
