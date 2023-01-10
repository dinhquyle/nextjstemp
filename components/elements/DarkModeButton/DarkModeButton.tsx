import { useEffect, useRef, useState } from "react";
import styles from "./DarkModeButton.module.scss";

function DarkModeButton(): JSX.Element {
  const handleDarkModeClick = () => {
    let body = document.querySelector(`body`);
    const darkMode = styles.dark;
    if( body ){
      body.classList.toggle(darkMode);
    }
  }
  
  return (
    <>
      <div className={styles.darkMode}>
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
