import Logo from "./Logo";
import MobileNav from "./MobileNavigator";
import LoggingButtons from "./LoggingButtons";
import DescktopNavigatr from "./DescktopNavigatr";
const Header = () => {
  return (
    <div className=" flex h-14  w-[calc(100%-24px)]  items-center justify-between lg:w-[calc(100%-96px)]  ">
      <div className="w-1/3  lg:hidden">
        <MobileNav />
      </div>
      <div className="flex w-1/3 items-center justify-center lg:w-1/4 lg:justify-start">
        <Logo />
      </div>
      <div className="hidden h-full items-center justify-center text-gray-300 lg:flex lg:w-1/2 ">
        <DescktopNavigatr />
      </div>
      <div
        className="flex h-full w-1/3 items-center justify-end md:gap-3 
        lg:w-1/4 lg:justify-end lg:gap-4 "
      >
        <LoggingButtons />
      </div>
    </div>
  );
};

export default Header;
