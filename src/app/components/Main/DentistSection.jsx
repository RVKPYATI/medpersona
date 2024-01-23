import { DentistOrder } from "./DentistOrder";

export const DentistSection = ({ openModal }) => {
  return (
    <section className="container mx-auto px-3 pb-14">
      <h2 className="text-black15 text-[43px] font-extrabold text-center md:text-left">
        Подбор стоматологов:
      </h2>
      <div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <DentistOrder name="Ортодонт" />
        <DentistOrder name="Ортопед гнатолог" />
        <DentistOrder name="Ортопед" />
        <DentistOrder name="Терапевт" />
        <DentistOrder name="Стоматолог общей практики" />
        <DentistOrder name="Стоматолог универсал" />
        <DentistOrder name="Хирург-имплантолог" />
        <DentistOrder name="Детский терапевт" />
        <DentistOrder name="Зубной техник" />
        <DentistOrder name="Зубной врач" />
        <DentistOrder name="Ассистент стоматолога" />
        <DentistOrder name="Медсестра ЦСО" />
        <DentistOrder name="Координатор" />
        <DentistOrder name="Администратор" />
        <DentistOrder name="Старшая медицинская сестра" />
      </div>
    </section>
  );
};
