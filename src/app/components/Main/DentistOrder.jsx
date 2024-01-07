export const DentistOrder = ({ name }) => {
  return (
    <div>
      <div className="py-5 px-5 bg-[#F4F7FB] rounded max-w-56 h-[91px] mb-4 relative before:block before:absolute before:bg-blue before:w-1 before:h-full before:top-0 before:left-0">
        <p className="text-base font-normal">{name}</p>
        <p className="text-[15px] font-bold text-blue underline">
          Подать заявку
        </p>
      </div>
    </div>
  );
};
