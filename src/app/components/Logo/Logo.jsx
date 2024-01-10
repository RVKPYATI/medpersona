import Image from "next/image";
export const Logo = () => {
  return (
    <div className="text-[#B4B4B4] text-[40px] font-bold ">
      <Image src="/logo.png" width={80} height={80} alt="logo" />
    </div>
  );
};
