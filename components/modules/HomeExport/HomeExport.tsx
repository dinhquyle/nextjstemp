import Image from "next/image";
import styles from "@/styles/page-styles/Home.module.scss";

function HomeExport(): JSX.Element {
  return (
    <>
      <div className={styles.secExport} id="export">
        <div
          className={`${styles.bg01} ${styles.cLazybg} ${styles.cImgAni} `}
        ></div>
        <div className={`${styles.container} ${styles.w1120}`}>
          <div className={styles.inner}>
            <div className={styles.inner__left}>
              <div
                className={`${styles.cTtl01} ${styles.cTtl01__tline} ${styles.cTtl01__white}`}
              >
                <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}>
                  <span className={styles.splitText}>Export</span>
                </p>
                <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}>
                  <span className={styles.splitText}>
                    海外のバイヤーの方へ
                  </span>
                </h2>
              </div>
              <div className={styles.pTxt01}>
                <p>
                  MADE in
                  JAPANテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.inner__right}>
              <ul className={styles.pLstCard}>
                <li>
                  <a className={styles.pCard} href="/export_business/">
                    <div className={styles.pCard__img}>
                      <div className={styles.pCard__imgIn}>
                        <span className={`${styles.cImgAni}`}>
                          <Image
                            src="/images/top/export01.jpg"
                            alt=""
                            width={360}
                            height={280}
                          />
                        </span>
                      </div>
                    </div>
                    <div className={styles.pCard__info}>
                      <div>
                        <p className={styles.pCard__txtEn}>
                          Export &nbsp;&nbsp;&nbsp;
                          <br className={styles.sp} />
                          Business
                        </p>
                        <h3 className={styles.pCard__txtJa}>輸出事業</h3>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={styles.pCard} href="/export_goods/">
                    <div className={styles.pCard__img}>
                      <div className={styles.pCard__imgIn}>
                      <span className={`${styles.cImgAni} `}>
                          <Image
                            src="/images/top/export02.jpg"
                            alt=""
                            width={360}
                            height={280}
                          />
                        </span>
                      </div>
                    </div>
                    <div className={styles.pCard__info}>
                      <div>
                        <p className={styles.pCard__txtEn}>
                          Export &nbsp;&nbsp;&nbsp;
                          <br className={styles.sp} />
                          Goods
                        </p>
                        <h3 className={styles.pCard__txtJa}>輸出事業</h3>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeExport };
