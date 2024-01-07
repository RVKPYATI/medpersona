import { NavLinks } from "../NavLinks/NavLinks";
import { Logo } from "../Logo/Logo";
import { Contacts } from "../Contacts/Contacts";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-blue mt-7">
        <NavLinks show="hidden" />
      </div>
      <div className="flex justify-center md:justify-between container mx-auto px-3">
        <Logo />
        <Contacts />
      </div>
    </footer>
  );
};
