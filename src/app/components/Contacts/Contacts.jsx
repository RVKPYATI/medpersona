import Link from "next/link";
import { Button } from "../ui/Button/Button";

export const Contacts = ({ openModal }) => {
  return (
    <div className="hidden items-center md:flex">
      <div className="flex flex-col items-end">
        <Link href="tel:79051954549" className="text-2xl font-bold">
          +7 (905) 195 45 49
        </Link>
        <Link
          href="mailto:medpersona24@yandex.ru"
          className="text-sm text-[#575757]"
        >
          medpersona24@yandex.ru
        </Link>
      </div>
      <div className="ml-[22px]">
        <Button title="Оставить заявку" onClick={openModal} />
      </div>
    </div>
  );
};
