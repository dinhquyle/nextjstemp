import Image from "next/image";
import styles from "./HomeImport.module.scss";
import stylesCom from "@/styles/page-styles/Home.module.scss";

function HomeImport(): JSX.Element {
  return (
    <>
      <div className={styles.secImport}>
        <div
          className={`${styles.bg01} ${styles.cLazybg} ${stylesCom.cImgAni} ${styles.right}`}
        ></div>
        <div className={`${stylesCom.container} ${styles.w1120}`}>
          <div className={styles.inner}>
            <div className={styles.inner__left}>
              <div
                className={`${styles.cTtl01} ${styles.cTtl01__2line} ${styles.cTtl01__white}`}
              >
                <p className={`${styles.cTtl01__en} ${stylesCom.jsSplitText}`}>
                  <span className={styles.splitText}>Import</span>
                </p>
                <h2 className={`${styles.cTtl01__ja} ${stylesCom.jsSplitText}`}>
                  <span className={styles.splitText}>
                    日本国内のバイヤーの方へ
                  </span>
                </h2>
              </div>
              <div className={stylesCom.pTxt01}>
                <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.inner__right}>
              <ul className={stylesCom.pLstCard}>
                <li>
                  <a className={stylesCom.pCard} href="/import_business/">
                    <div className={stylesCom.pCard__img}>
                      <div className={stylesCom.pCard__imgIn}>
                        <span className={`${stylesCom.cImgAni}`}>
                          <Image
                            src="/images/top/import01.jpg"
                            alt=""
                            width={360}
                            height={280}
                          />
                        </span>
                      </div>
                    </div>
                    <div className={stylesCom.pCard__info}>
                      <div>
                        <p className={stylesCom.pCard__txtEn}>
                          Import &nbsp;&nbsp;&nbsp;
                          <br className={styles.sp} />
                          Business
                        </p>
                        <h3 className={stylesCom.pCard__txtJa}>輸入事業</h3>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={stylesCom.pCard} href="/import_goods/">
                    <div className={stylesCom.pCard__img}>
                      <div className={stylesCom.pCard__imgIn}>
                        <span className={`${stylesCom.cImgAni}`}>
                          <Image
                            src="/images/top/import02.jpg"
                            alt=""
                            width={360}
                            height={280}
                          />
                        </span>
                      </div>
                    </div>
                    <div className={stylesCom.pCard__info}>
                      <div>
                        <p className={stylesCom.pCard__txtEn}>
                          Import &nbsp;&nbsp;&nbsp;
                          <br className={styles.sp} />
                          Goods
                        </p>
                        <h3 className={stylesCom.pCard__txtJa}>輸入商品</h3>
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

export { HomeImport };
