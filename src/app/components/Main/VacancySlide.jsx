import { Button } from "../ui/Button/Button";

export const VacancySlide = () => {
  return (
    <div
      className="p-6 rounded"
      style={{
        background:
          "url(/Ellipse5.svg) left bottom no-repeat,url(/Ellipse4.svg) top right no-repeat,#eef5ff",
      }}
    >
      <p className="mb-4 text-blue text-xl font-semibold">
        Врач офтальмолог или терапевт пример должности
      </p>
      <p>
        <span className="text-[#000000] font-semibold">Город: </span>Москва
      </p>
      <p>
        <span className="text-[#000000] font-semibold">Опыт работы: </span>От 10
        лет
      </p>
      <p>
        <span className="text-[#000000] font-semibold">Занятость: </span>Полный
        рабочий день
      </p>
      <p className="mt-4">
        <span className="text-[#000000] font-semibold">Обязанности: </span>
      </p>
      <p className="mb-6">
        Это тестовый контент, который не должен нести никакого смысла, лишь
        показать наличие самого текста и в деле. Тестовый контент, который не
        должен нести никакого смысла, лишь показать наличие самого текста или
        типографики в деле.
      </p>
      <Button title="Подробнее" style="w-full" />
    </div>
  );
};
