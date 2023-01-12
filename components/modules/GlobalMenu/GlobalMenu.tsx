import styles from "../GlobalHeader/GlobalHeader.module.scss";

function GlobalMenu(): JSX.Element {

  const handleSubmenuClick = (e:any) => {
    //setActive(!isActive);
    e.currentTarget.classList.toggle(styles.isActive);
    if(e.currentTarget.nextElementSibling){
      e.currentTarget.nextElementSibling.classList.toggle(styles.isActive);
    }
  };
  return (
    <>
      <h1 className={`${styles.h1Txt} ${styles.pc}`}>
        h1テキストが入りますh1テキストが入りますh1テキストが入りますh1テキストが入ります
      </h1>
      <div className={styles.lHInner}>
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
                      <a href="/">
                        <span>輸出事業</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
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
                      <a href="/">
                        <span>輸入事業</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>輸入商品</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className={styles.lGnavi__item} href="/">
                  <span className={styles.lGnavi__txtEn}>Flow</span>
                  <span className={styles.lGnavi__txtJa}>取引の流れ</span>
                </a>
              </li>
              <li>
                <a className={styles.lGnavi__item} href="/">
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
                      <a href="/">
                        <span>会社概要</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>歴史</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.lHGnavi__btn}>
            <a href="/contact">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.lMenu}>
        <ul className={styles.lMGnavi}>
          <li>
            <p className={`${styles.lMGnavi__item} ${styles.hasSubmenu}`} onClick={handleSubmenuClick}>
              <span className={styles.lMGnavi__txtEn}>Export</span>
              <span className={styles.lMGnavi__txtJa}>テキストテキスト</span>
            </p>
            <div className={styles.lMSubmenu}>
              <ul>
                <li>
                  <a href="/">テキスト</a>
                </li>
                <li>
                  <a href="/">テキスト</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p className={`${styles.lMGnavi__item} ${styles.hasSubmenu}`} onClick={handleSubmenuClick}>
              <span className={styles.lMGnavi__txtEn}>Import</span>
              <span className={styles.lMGnavi__txtJa}>テキストテキスト</span>
            </p>
            <div className={styles.lMSubmenu}>
              <ul>
                <li>
                  <a href="/">テキスト</a>
                </li>
                <li>
                  <a href="/">テキスト</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className={styles.lMGnavi__item} href="/">
              <span className={styles.lMGnavi__txtEn}>Flow</span>
              <span className={styles.lMGnavi__txtJa}>取引の流れ</span>
            </a>
          </li>
          <li>
            <a className={styles.lMGnavi__item} href="/">
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
                  <a href="/">会社概要</a>
                </li>
                <li>
                  <a href="/">井元産業の歴史</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <a className={styles.lMBtn01} href="/">
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

export { GlobalMenu };
