"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  forceDarkNavbar: boolean;
  setForceDarkNavbar: (value: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType>({
  forceDarkNavbar: false,
  setForceDarkNavbar: () => {},
});

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [forceDarkNavbar, setForceDarkNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={{ forceDarkNavbar, setForceDarkNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}
