import Image from "next/image";
import styles from "@/styles/page-styles/Home.module.scss";


function HomeCaseExport(): JSX.Element {
  return (
    <>
      <div className={styles.secCase}>
        <div className={`${styles.container} ${styles.inner}`}>
          <div className={styles.cTtl01}>
            <p
              className={`${styles.cTtl01__en} ${styles.fs26} ${styles.jsSplitText}`}
            >
              <span className={styles.splitText}>Cases</span>
            </p>
            <h3
              className={`${styles.cTtl01__ja} ${styles.fs15} ${styles.jsSplitText}`}
            >
              <span className={styles.splitText}>取引商品・実績</span>
            </h3>
          </div>
          <div className={styles.lstCase}>
            <div className={styles.swiperWrapper}>
              <div className={styles.swiperSlide}>
                <a className={styles.cCase} href="#">
                  <div className={styles.cCase__img}>
                      <span className={`${styles.cImgAni}`}>
                      <Image
                        src="/images/temp/case01.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={styles.cCase__cate01}>
                      <span>Export</span>
                    </p>
                  </div>
                  <div className={styles.cCase__ttl}>
                    <div className={styles.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={styles.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={styles.cCase__cate02}>
                    <span>陶磁器テーブルウェア</span>
                  </p>
                </a>
              </div>
              <div className={styles.swiperSlide}>
                <a className={styles.cCase} href="#">
                  <div className={styles.cCase__img}>
                    <span className={`${styles.cImgAni}`}>
                      <Image
                        src="/images/temp/case02.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={styles.cCase__cate01}>
                      <span>Export</span>
                    </p>
                  </div>
                  <div className={styles.cCase__ttl}>
                    <div className={styles.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={styles.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={styles.cCase__cate02}>
                    <span>陶磁器テーブルウェア</span>
                  </p>
                </a>
              </div>
              <div className={styles.swiperSlide}>
                <a className={styles.cCase} href="#">
                  <div className={styles.cCase__img}>
                    <span className={`${styles.cImgAni}`}>
                      <Image
                        src="/images/temp/case03.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={styles.cCase__cate01}>
                      <span>Export</span>
                    </p>
                  </div>
                  <div className={styles.cCase__ttl}>
                    <div className={styles.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={styles.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={styles.cCase__cate02}>
                    <span>陶磁器テーブルウェア</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.btn01}>
            <a
              className={`${styles.cBtn01} ${styles.cBtn01__center}`}
              href="/cases/"
            >
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeCaseExport };
