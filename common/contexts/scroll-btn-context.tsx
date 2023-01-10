import React, {
  createContext,
  useRef,
  useState,
} from "react";

export const BtnScrollContext = createContext({});

export const BtnScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const targetElement = useRef<HTMLDivElement>(null);
  const scrollingTop = () => {
    const elmnt = targetElement;
    if( elmnt.current ){
      let headerHeight = 100;
      if( window.innerWidth < 1000 ){
        headerHeight = 70;
      }
      let scrollTo = elmnt.current.offsetTop - headerHeight;
      window.scroll({ 
        top: scrollTo, 
        behavior: "smooth" 
      });
    }
  };
  return (
    <>
      <BtnScrollContext.Provider value={targetElement}>
        {children}
      </BtnScrollContext.Provider>
    </>
  );
};
