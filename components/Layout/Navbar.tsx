"use client";

import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [navTop, setNavTop] = useState("top-[64px]");

  useEffect(() => {
    setNavTop(pathname === "/" ? "top-[64px]" : "top-[20px]");
  }, [pathname]);

  return (
    <div
      className={`max-w-[1336px] h-[100px] fixed ${navTop} left-[32px] right-[32px] mx-auto z-50 hidden lg:flex items-center justify-between bg-blue-dark px-6 rounded-3xl transition-all duration-500 ease-in-out`}
    >
      <Logo />
      <Navlinks />
    </div>
  );
};

export default Navbar;
