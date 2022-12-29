import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styles from "./GlobalHeader.module.scss";
import Image from "next/image";

type TGHProps = {
  children?: React.ReactNode;
};
function GlobalHeader({}: TGHProps): JSX.Element {
  const [cls, setCls] = useState(``);
  const [state, setState] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener(`scroll`, listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const scrollto = document.getElementById(`scrollto`);
    const isWhite = styles.isWhite;
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
  const handleSubmenuClick = (e:any) => {
    //setActive(!isActive);
    e.currentTarget.classList.toggle(styles.isActive);
    if(e.currentTarget.nextElementSibling){
      e.currentTarget.nextElementSibling.classList.toggle(styles.isActive);
    }
  };

  return (
    <>
      <header
        className={`${styles.lHeader} ${cls}`}
        data-state={state}
        id="header"
      >
        <h1 className={`${styles.h1Txt} ${styles.pc}`}>
          h1テキストが入りますh1テキストが入りますh1テキストが入りますh1テキストが入ります
        </h1>
        <div className={styles.lHInner}>
          <div className={`${styles.lHLogo} ${styles.lHLogo__01}`}>
            <Link href="/">
              <a>
                <p className={styles.pc}>
                  <Image
                    src="/images/common/header/logo01.png"
                    alt="井元産業株式会社"
                    width={161}
                    height={145}
                  />
                </p>
                <p className={styles.sp}>
                  <Image
                    src="/images/common/header/logo01_sp.png"
                    alt="井元産業株式会社"
                    width={83}
                    height={125}
                  />
                </p>
              </a>
            </Link>
          </div>
          <div className={`${styles.lHLogo} ${styles.lHLogo__02} ${styles.pc}`}>
            <Link href="/">
              <a>
                <p className={styles.img}>
                  <Image
                    src="/images/common/header/logo02.png"
                    alt="井元産業株式会社"
                    width={132}
                    height={56}
                    className={styles.pc}
                  />
                  <Image
                    src="/images/common/header/logo02_sp.png"
                    alt="井元産業株式会社"
                    width={118}
                    height={50}
                    className={styles.sp}
                  />
                </p>
              </a>
            </Link>
          </div>
          <div className={`${styles.lHGnavi} ${styles.pc}`}>
            <div className={styles.lHGnavi__lst}>
              <ul className={styles.lGnavi}>
                <li className={styles.hasSubmenu}>
                  <p className={styles.lGnavi__item}>
                    <span className={styles.lGnavi__txtEn}>Export</span>
                    <span className={styles.lGnavi__txtJa}>
                      海外バイヤーの方へ
                    </span>
                  </p>
                  <div className={styles.lGnavi__submenu}>
                    <ul>
                      <li>
                        <a href="/export_business/">
                          <span>輸出事業</span>
                        </a>
                      </li>
                      <li>
                        <a href="/export_goods/">
                          <span>輸出商品</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.hasSubmenu}>
                  <p className={styles.lGnavi__item}>
                    <span className={styles.lGnavi__txtEn}>Import</span>
                    <span className={styles.lGnavi__txtJa}>
                      日本バイヤーの方へ
                    </span>
                  </p>
                  <div className={styles.lGnavi__submenu}>
                    <ul>
                      <li>
                        <a href="/import_business/">
                          <span>輸入事業</span>
                        </a>
                      </li>
                      <li>
                        <a href="/import_goods/">
                          <span>輸入商品</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className={styles.lGnavi__item} href="/flow/">
                    <span className={styles.lGnavi__txtEn}>Flow</span>
                    <span className={styles.lGnavi__txtJa}>取引の流れ</span>
                  </a>
                </li>
                <li>
                  <a className={styles.lGnavi__item} href="/cases/">
                    <span className={styles.lGnavi__txtEn}>Cases</span>
                    <span className={styles.lGnavi__txtJa}>取引商品・実績</span>
                  </a>
                </li>
                <li className={styles.hasSubmenu}>
                  <p className={styles.lGnavi__item}>
                    <span className={styles.lGnavi__txtEn}>About Us</span>
                    <span className={styles.lGnavi__txtJa}>
                      井元産業について
                    </span>
                  </p>
                  <div className={styles.lGnavi__submenu}>
                    <ul>
                      <li>
                        <a href="/about/">
                          <span>会社概要</span>
                        </a>
                      </li>
                      <li>
                        <a href="/history/">
                          <span>歴史</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.lHGnavi__btn}>
              <a href="/contact/">
                <span>Contact</span>
              </a>
            </div>
          </div>
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
        </div>
        <div className={`${styles.lHeaderSP} ${styles.sp}`}>
          <div className={`${styles.lHLogo} ${styles.lHLogo__02}`}>
            <Link href="/">
              <a>
                <Image
                  src="/images/common/header/logo02_sp.png"
                  alt="井元産業株式会社"
                  width={118}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <div className={styles.lHeaderSP__btnSP}>
            <a className={styles.lHeaderSP__btn01} href="/contact/"></a>
            {/* <div
              className={`${styles.lHeaderSP__menu} ${isActive ? 'your_className': null}`}
              onClick={handleHambegerClick}
            > */}
            <div
              className={`${styles.lHeaderSP__menu}`}
              onClick={handleHambegerClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.lMenu}>
        <ul className={styles.lMGnavi}>
          <li>
          <p className={`${styles.lMGnavi__item} ${styles.hasSubmenu}`} onClick={handleSubmenuClick}>
              <span className={styles.lMGnavi__txtEn}>Export</span>
              <span className={styles.lMGnavi__txtJa}>海外バイヤーの方へ</span>
            </p>
            <div className={styles.lMSubmenu}>
              <ul>
                <li>
                  <a href="/export_business/">輸出事業</a>
                </li>
                <li>
                  <a href="/export_goods/">輸出商品</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p className={`${styles.lMGnavi__item} ${styles.hasSubmenu}`} onClick={handleSubmenuClick}>
              <span className={styles.lMGnavi__txtEn}>Import</span>
              <span className={styles.lMGnavi__txtJa}>日本バイヤーの方へ</span>
            </p>
            <div className={styles.lMSubmenu}>
              <ul>
                <li>
                  <a href="/import_business/">輸入事業</a>
                </li>
                <li>
                  <a href="/import_goods/">輸入商品</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className={styles.lMGnavi__item} href="/flow/">
              <span className={styles.lMGnavi__txtEn}>Flow</span>
              <span className={styles.lMGnavi__txtJa}>取引の流れ</span>
            </a>
          </li>
          <li>
            <a className={styles.lMGnavi__item} href="/cases/">
              <span className={styles.lMGnavi__txtEn}>Cases</span>
              <span className={styles.lMGnavi__txtJa}>取引商品・実績</span>
            </a>
          </li>
          <li>
          <p className={`${styles.lMGnavi__item} ${styles.hasSubmenu}`} onClick={handleSubmenuClick}>
              <span className={styles.lMGnavi__txtEn}>About Us</span>
              <span className={styles.lMGnavi__txtJa}>井元産業について</span>
            </p>
            <div className={styles.lMSubmenu}>
              <ul>
                <li>
                  <a href="/about/">会社概要</a>
                </li>
                <li>
                  <a href="/history/">井元産業の歴史</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <a className={styles.lMBtn01} href="/contact/">
          <span>Mail Form</span>
        </a>
        <ul className={styles.lMLang}>
          <li>
            <a href="#">EN</a>
          </li>
          <li>
            <a className={styles.isActive} href="#">
              JP
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export { GlobalHeader };
