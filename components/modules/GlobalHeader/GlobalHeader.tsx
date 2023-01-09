import { useEffect, useState } from "react";
import styles from "./GlobalHeader.module.scss";

type TGHProps = {
  children?: React.ReactNode;
};
function GlobalHeader({ children }: TGHProps): JSX.Element {
  const [cls, setCls] = useState(``);
  const [state, setState] = useState(0);

  useEffect(() => {
    window.addEventListener(`scroll`, listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const scrollto = document.getElementById(`scrollto`);
    let isWhite = styles.isWhite;
    if (scrollto) {
      if (winScroll > scrollto.offsetTop) {
        setCls(isWhite);
      } else {
        setCls(``);
      }
      if (winScroll > 20 && winScroll < scrollto.offsetTop) {
        setState(1);
      } else {
        setState(0);
      }
    }
  };

  return (
    <header className={`${styles.lHeader} ${cls}`}
    data-state={state}
    id="header">
      {children}
    </header>
  );
}

export { GlobalHeader };
