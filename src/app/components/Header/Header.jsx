import { Contacts } from "../Contacts/Contacts";
import { Logo } from "../Logo/Logo";
import { NavLinks } from "../NavLinks/NavLinks";

export const Header = ({ openModal }) => {
  return (
    <header className="  pt-7">
      <div className="flex justify-center md:justify-between container mx-auto px-3">
        <Logo />
        <Contacts openModal={openModal} />
      </div>
      <div className="bg-blue mt-7">
        <NavLinks />
      </div>
    </header>
  );
};
