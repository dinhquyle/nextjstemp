import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styles from "./GlobalFooter.module.scss";
import Image from "next/image";

type TGHProps = {
  children?: React.ReactNode;
};
function GlobalFooter({}: TGHProps): JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const box = document.getElementsByClassName(styles.cImgAni)
    setTimeout(() => {
      ScrollTrigger.batch(box, {
        toggleClass: styles.isInview,
        //once: true
      });
    }, 100);
  }, []);
  const handleSubmenuClick = (e:any) => {
    e.currentTarget.classList.toggle(styles.isActive);
    if(e.currentTarget.nextElementSibling){
      e.currentTarget.nextElementSibling.classList.toggle(styles.isActive);
    }
  };
  return (
    <>
      <footer className={`${styles.lFooter} ${styles.cImgAni}`}>
        <div className={styles.container}>
          <div className={styles.lFLogo}>
            <Link href="/">
              <a>
                <Image
                  src="/images/common/footer/f_logo01.png"
                  alt="テキスト"
                  width={162}
                  height={148}
                />
              </a>
            </Link>
          </div>
          <p className={styles.lFAddress}>
            〒462-0819　
            <br className={styles.sp} />
            テキストテキストテキストテキストテキスト
          </p>
          <div className={styles.lFGroupBtn}>
            <a
              className={`${styles.lFBtn} ${styles.lFBtn01}`}
              href="tel:052-000-0000"
            >
              <p>
                <span className={styles.lFBtn01__tel}>052-000-0000</span>
                <span className={styles.lFBtn01__time}>
                テキストテキストテキストテキストテキスト
                </span>
              </p>
            </a>
            <a className={`${styles.lFBtn} ${styles.lFBtn02}`} href="/contact/">
              <span>Mail Form</span>
            </a>
          </div>
          <div className={styles.lFGnavi}>
            <div className={styles.lFGnavi__item}>
              <p className={styles.lFGnavi__ttl} onClick={handleSubmenuClick}>井元産業について</p>
              <ul className={styles.lFGnavi__lst}>
                <li>
                  <Link href="/">
                    <a>ホーム</a>
                  </Link>
                </li>
                <li>
                  <a href="/about/">会社概要</a>
                </li>
                <li>
                  <a href="/history/">井元産業の歴史</a>
                </li>
                <li>
                  <a href="/news/">お知らせ・コラム</a>
                </li>
              </ul>
            </div>
            <div className={styles.lFGnavi__item}>
              <p className={styles.lFGnavi__ttl} onClick={handleSubmenuClick}>海外バイヤーの方へ</p>
              <ul className={styles.lFGnavi__lst}>
                <li>
                  <a href="/export_business/">輸出事業</a>
                </li>
                <li>
                  <a href="/export_goods/">輸出商品</a>
                </li>
              </ul>
              <p className={styles.lFGnavi__ttl} onClick={handleSubmenuClick}>日本国内のバイヤーの方へ</p>
              <ul className={styles.lFGnavi__lst}>
                <li>
                  <a href="/import_business/">輸入事業</a>
                </li>
                <li>
                  <a href="/import_goods/">輸入商品</a>
                </li>
              </ul>
            </div>
            <div className={styles.lFGnavi__item}>
              <p className={styles.lFGnavi__ttl} onClick={handleSubmenuClick}>その他</p>
              <ul className={styles.lFGnavi__lst}>
                <li>
                  <a href="/flow/">取引の流れ</a>
                </li>
                <li>
                  <a href="/cases/">取引商品・実績</a>
                </li>
                <li>
                  <a href="/faq/">よくある質問</a>
                </li>
                <li>
                  <a href="/contact/">お問い合わせ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.lFTxtSeo}>
            <p>
              フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。フッターテキストが入ります。
            </p>
          </div>
        </div>
        <div className={styles.lFBlock01}>
          <div className={`${styles.container} ${styles.lFBlock01__inner}`}>
            <ul className={styles.lFBlock01__link}>
              <li>
                <a href="/policy/">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="/sitemap/">SITEMAP</a>
              </li>
            </ul>
            <p className={styles.lFBlock01__txt}>
              &copy; All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <div className={styles.cGoTop}></div>

      <div className={styles.cLangSide}>
        <ul>
          <li>
            <a href="/en/">EN</a>
          </li>
          <li>
            <Link href="/">
              <a className={styles.isActive}>JA</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export { GlobalFooter };
