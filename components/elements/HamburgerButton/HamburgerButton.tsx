import * as React from "react";
import styles from "../../modules/GlobalHeader/GlobalHeader.module.scss";

function HamburgerButton(): JSX.Element {
  const handleHambegerClick = () => {
    let body = document.querySelector(`body`);
    let isLayerOn = styles.isLayerOn;
    let __cur_h = body?.offsetHeight;
    if( body ){
      body.classList.toggle(isLayerOn);
    }
    if (document.body.classList.contains(isLayerOn)) {
      if( body ){
        body.style.position = 'fixed';
        body.style.height = __cur_h+'px';
        body.style.zIndex = '-1';
      }
    }
    else{
      if( body ){
        body.style.position = 'static';
        body.style.height = 'auto';
      }
    }
    
  };
  return (
    <>
      <div className={`${styles.sp} ${styles.lHBtnSP}`}>
        <a className={styles.lHBtn01} href="/contact/"></a>
        <div
          className={styles.lHMenu} 
          onClick={handleHambegerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.lHeaderSP__btnSP}>
        <a className={styles.lHeaderSP__btn01} href="/contact/"></a>
        <div
          className={`${styles.lHeaderSP__menu}`}
          onClick={handleHambegerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export { HamburgerButton };
