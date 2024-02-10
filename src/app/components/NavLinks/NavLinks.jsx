"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const NavLinks = ({ show }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="container mx-auto ">
      <ul className=" justify-between items-center py-3 hidden md:flex">
        <li>
          <Link href="#" className="text-[#FFFFFF] hover:bg-[#7198cc] p-2">
            Подбор стоматологов
          </Link>
        </li>
        <li>
          <Link href="#" className="text-[#FFFFFF] hover:bg-[#7198cc] p-2">
            Подбор Медицинского персонала
          </Link>
        </li>
        <li>
          <Link href="#" className="text-[#FFFFFF] hover:bg-[#7198cc] p-2">
            Вакансии
          </Link>
        </li>
        <li>
          <Link href="#" className="text-[#FFFFFF] hover:bg-[#7198cc] p-2">
            Кандидатам
          </Link>
        </li>
        <li>
          <Link href="#" className="text-[#FFFFFF] hover:bg-[#7198cc] p-2">
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="text-[#FFFFFF] hover:bg-[#7198cc] p-2"
          >
            Контакты
          </Link>
        </li>
      </ul>
      <div className={`md:hidden  p-3 flex justify-between items-center`}>
        <div className={`${show}`}>
          <Image
            src="/burger-menu.svg"
            width={36}
            height={36}
            alt="burger"
            onClick={toggleOpen}
          />
          <ul
            onClick={toggleOpen}
            className={`absolute top-0 right-0 left-0 bottom-0 w-screen h-screen bg-blue p-4 text-center text-lg ${
              openMenu ? "block" : "hidden"
            }`}
          >
            <button className="float-right" onClick={toggleOpen}>
              <svg
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Menu / Close_LG">
                  <path
                    id="Vector"
                    d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
            <li className="p-7">
              <Link href="#" className="text-[#FFFFFF] ">
                Подбор стоматологов
              </Link>
            </li>
            <li className="p-7">
              <Link href="#" className="text-[#FFFFFF] ">
                Подбор Медицинского персонала
              </Link>
            </li>
            <li className="p-7">
              <Link href="#" className="text-[#FFFFFF] ">
                Вакансии
              </Link>
            </li>
            <li className="p-7">
              <Link href="#" className="text-[#FFFFFF] ">
                Кандидатам
              </Link>
            </li>
            <li className="p-7">
              <Link href="#" className="text-[#FFFFFF] ">
                Отзывы
              </Link>
            </li>
            <li className="p-7">
              <Link href="/contacts" className="text-[#FFFFFF] ">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <Link
            href="tel:79051954549"
            className="text-xl font-bold text-[#FFFFFF]"
          >
            +7 (905) 195 45 49
          </Link>
          <Link
            href="mailto:medpersona24@yandex.ru"
            className="text-sm text-[#ffffff]"
          >
            medpersona24@yandex.ru
          </Link>
        </div>
      </div>
    </nav>
  );
};
