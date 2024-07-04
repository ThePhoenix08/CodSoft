import React, { createContext, useState, ReactNode, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MobileContextProps {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

const MobileContext = createContext<MobileContextProps>({
  isMobile: false,
  setIsMobile: () => {},
});
const MobileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    setIsMobile(matches);
  }, [matches]);

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export { MobileContext, MobileProvider };
