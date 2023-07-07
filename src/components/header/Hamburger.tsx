import { IMobileNav } from "@/types/header";
const Hamburger = ({ isOpen, setIsOpen }: IMobileNav) => {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-400`;

  return (
    <button
      className="group flex h-16 w-16  flex-col items-start justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "translate-y-3 rotate-45 bg-white opacity-75 group-hover:opacity-100"
            : "bg-white opacity-75 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-translate-y-3 -rotate-45 opacity-75 group-hover:opacity-100"
            : "opacity-75 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default Hamburger;
