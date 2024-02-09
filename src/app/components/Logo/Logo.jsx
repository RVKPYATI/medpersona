import Image from "next/image";
import Link from "next/link";
export const Logo = () => {
  return (
    <Link href="/">
      <div className="text-[#B4B4B4] text-[40px] font-bold ">
        <Image src="/logo.png" width={80} height={80} alt="logo" />
      </div>
    </Link>
  );
};
