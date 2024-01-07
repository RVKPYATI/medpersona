import Image from "next/image";
import { MedicalNumber } from "./MedicalNumber";

export const MedicalSection = () => {
  return (
    <section
      className=""
      style={{
        background: "url(/bgellipcewhite.svg) top right no-repeat,#F4F7FB",
      }}
    >
      <div className="container mx-auto flex justify-center md:justify-between items-center flex-wrap px-3 pt-[46px] pb-[70px] text-center md:text-left">
        <Image
          src="/undraw_medicine_b-1-ol 1.svg"
          width={512}
          height={362}
          alt="image"
        />
        <div className="max-w-[570px]">
          <h2 className="text-black15 text-[43px] font-extrabold text-center md:text-left">
            Подбор медицинского персонала
          </h2>
          <div className="flex justify-between gap-1 mt-7 ">
            <div>
              <MedicalNumber number={1} text="Врач кардиолог" />
              <MedicalNumber number={2} text="Врач эндокринолог" />
              <MedicalNumber number={3} text="Врач акушер гинеколог" />
            </div>
            <div>
              <MedicalNumber number={4} text="Врач офтальмолог" />
              <MedicalNumber number={5} text="Другой врач" />
              <MedicalNumber number={6} text="Младший медицинский персонал" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
