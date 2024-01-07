export const MedicalNumber = ({ number, text }) => {
  return (
    <div className="max-w-[270px] h-[75px] rounded border-[#E2E7EE] bg-[#FFFFFF] flex p-[18px] mb-[10px]">
      <div className="bg-blue min-w-[38px] h-9 rounded-full text-[#FFFFFF] font-semibold flex justify-center items-center mr-[18px] ">
        {number}
      </div>
      <p className="flex items-center">{text}</p>
    </div>
  );
};
