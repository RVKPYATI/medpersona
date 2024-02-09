import Image from "next/image";
import { Button } from "../ui/Button/Button";

export const HeroSection = ({ openModal }) => {
  return (
    <section
      style={{
        background:
          "url(/Ellipse2.svg) bottom no-repeat, url(/Ellipse1.svg) top right no-repeat, url(/Ellipse3.svg) left bottom no-repeat",
      }}
    >
      <div className="container mx-auto flex justify-center md:justify-between items-center flex-wrap px-3 text-center md:text-left">
        <div className="text-[#151515] max-w-[600px]">
          <h1 className="text-[50px] font-extrabold ">
            Кадровое агентство Медперсона
          </h1>
          <p className="mb-8">
            Поможем, когда самостоятельный поиск докторов не даёт результата, а
            сторонние агентства по подбору персонала не имеют компетенций
            закрыть узкие профильные задачи медицинского подбора кадров!
          </p>
          <Button title="Оставить заявку" onClick={openModal} />
        </div>
        <div>
          <Image
            src="/bg-header.svg"
            width={578}
            height={478}
            alt="bg-header"
          />
        </div>
      </div>
    </section>
  );
};
