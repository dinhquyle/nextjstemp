import { useEffect, useState } from "react";
import styles from "./DarkModeButton.module.scss";

function DarkModeButton(): JSX.Element {
  const [isActive, setIsActive] = useState(``);

  useEffect(() => {
    window.addEventListener(`scroll`, listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const scrollto = document.getElementById(`scrollto`);
    let isActive = styles.active;
    if (scrollto) {
      if (winScroll > scrollto.offsetTop) {
        setIsActive(isActive);
      } else {
        setIsActive(``);
      }
    }
  };
  const handleDarkModeClick = () => {
    let body = document.querySelector(`body`);
    const darkMode = styles.dark;
    if( body ){
      body.classList.toggle(darkMode);
    }
  }
  
  return (
    <>
      <div className={`${styles.darkMode} ${isActive}`}>
        <input type="checkbox" className={styles.checkbox} id="checkbox" />
        <label htmlFor="checkbox" className={styles.label} onClick={handleDarkModeClick}>
          <i className={`fas fa-moon ${styles.iconMoon}`}></i>
          <i className={`fas fa-sun ${styles.iconSun}`}></i>
          <div className={styles.ball}></div>
        </label>
      </div>
    </>
  );
}

export { DarkModeButton };
