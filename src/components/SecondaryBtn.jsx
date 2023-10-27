function SecondaryBtn({ children }) {
  return (
    <button
      className="manrope font-bold text-[18px] tracking-[-.18px]
     text-white hover:text-green secondaryBtnBorder"
    >
      {children}
    </button>
  );
}

export default SecondaryBtn;
