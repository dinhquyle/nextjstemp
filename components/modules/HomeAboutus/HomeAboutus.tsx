import Image from "next/image";
import styles from "@/styles/page-styles/Home.module.scss";

function HomeAboutus(): JSX.Element {
  return (
    <>
      <div className={styles.secAbout}>
        <div className={styles.container}>
          <div className="cTtl01 cTtl01__2line cTtl01__center">
            <p className="cTtl01__en jsSplitText">
              <span className="splitText">About Us</span>
            </p>
            <h2 className="cTtl01__ja jsSplitText">
              <span className="splitText">井元産業について</span>
            </h2>
          </div>
          <ul className={styles.lstItem}>
            <li>
              <a className={styles.item} href="/about/#philosophy">
                <div className={styles.item__img}>
                  <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                    <Image
                      src="/images/top/about01.jpg"
                      alt="井元産業の目指す姿"
                      width={280}
                      height={210}
                    />
                  </div>
                </div>
                <div className={styles.item__info}>
                  <div>
                    <p className={styles.item__txtEn}>Philosophy</p>
                    <h3 className={styles.item__txtJa}>井元産業の目指す姿</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className={styles.item} href="/about/#message">
                <div className={styles.item__img}>
                  <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                    <Image
                      src="/images/top/about02.jpg"
                      alt="社長メッセージ"
                      width={280}
                      height={210}
                    />
                  </div>
                </div>
                <div className={styles.item__info}>
                  <div>
                    <p className={styles.item__txtEn}>Message</p>
                    <h3 className={styles.item__txtJa}>社長メッセージ</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className={styles.item} href="/about/#company">
                <div className={styles.item__img}>
                  <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                    <Image
                      src="/images/top/about03.jpg"
                      alt="会社情報"
                      width={280}
                      height={210}
                    />
                  </div>
                </div>
                <div className={styles.item__info}>
                  <div>
                    <p className={styles.item__txtEn}>Company</p>
                    <h3 className={styles.item__txtJa}>会社情報</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className={styles.item} href="/about/#affiliates">
                <div className={styles.item__img}>
                  <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                    <Image
                      src="/images/top/about04.jpg"
                      alt="関連会社"
                      width={280}
                      height={210}
                    />
                  </div>
                </div>
                <div className={styles.item__info}>
                  <div>
                    <p className={styles.item__txtEn}>Affiliates</p>
                    <h3 className={styles.item__txtJa}>関連会社</h3>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export { HomeAboutus };
