function PrimaryBtn({ children }) {
  return (
    <button
      className="pt-[13px] pb-[16px] px-[25px] manrope font-bold text-[18px] tracking-[-.18px]
    bg-green text-purple hover:bg-purple hover:text-green primaryBtnHover"
    >
      {children}
    </button>
  );
}

export default PrimaryBtn;
