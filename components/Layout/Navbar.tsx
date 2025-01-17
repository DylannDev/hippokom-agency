import Navlinks from "./Navlinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-[1336px] h-[100px] fixed top-[64px] left-[64px] right-[64px] mx-auto z-50 hidden lg:flex items-center justify-between bg-blue-dark px-6 rounded-3xl">
      <Logo />
      <Navlinks />
    </div>
  );
};

export default Navbar;
