export function Button({
  title = "",
  style = "",
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      className={`btn bg-blue hover:bg-[#5e8bcf] text-[#FFFFFF] rounded px-9 py-3 ${style}`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
