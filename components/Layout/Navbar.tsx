"use client";

import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [navTop, setNavTop] = useState("top-[48px]");

  useEffect(() => {
    setNavTop(pathname === "/" ? "top-[48px]" : "top-[20px]");
  }, [pathname]);

  return (
    <div
      className={`max-w-[1472px] h-[100px] absolute ${navTop} left-[32px] right-[32px] lg:mx-8 min-[1536px]:mx-auto z-50 hidden lg:flex items-center justify-between bg-blue-dark px-6 rounded-3xl transition-all duration-500 ease-in-out`}
    >
      <Logo />
      <Navlinks />
    </div>
  );
};

export default Navbar;
