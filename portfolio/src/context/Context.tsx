import React, { createContext, useState, ReactNode, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ContextProps {
  isMobile: boolean;
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
  isMobile: false,
  isDark: false,
  setDark: () => {},
});

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const viewportWidth = useMediaQuery("(max-width:1024px)");

  const [isDark, setDark] = useState<boolean>(false);
  const preferredTheme = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setIsMobile(viewportWidth);
  }, [viewportWidth]);

  useEffect(() => {
    setDark(preferredTheme);
  }, [preferredTheme]);

  return (
    <Context.Provider value={{ isMobile, isDark, setDark }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
