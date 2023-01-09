import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";

type TTheme = {
  isShowHeader: boolean;
  setIsShowHeader: (isShowHeader: boolean) => void;
};

export const HeaderContext = createContext<TTheme | null>(null);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShowHeader, setIsShowHeader] = useState(true);

  return (
    <>
      <HeaderContext.Provider value={{ isShowHeader, setIsShowHeader }}>
        {children}
      </HeaderContext.Provider>
    </>
  );
};
