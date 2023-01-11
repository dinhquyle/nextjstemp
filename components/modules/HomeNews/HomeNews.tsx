import styles from "./HomeNews.module.scss";

function HomeNews(): JSX.Element {

  return (
    <>
      <div className={styles.secNews}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.cTtl01}>
            <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}>
              <span className={styles.splitText} id="jsTest">News</span>
            </p>
            <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}>
              <span className={styles.splitText}>お知らせ・コラム</span>
            </h2>
          </div>
          <ul className={`${styles.cLstNews} ${styles.lst01}`}>
            <li>
              <a className={styles.cNews} href="#">
                <span className={styles.cNews__date}>2022.12.12</span>
                <p className={styles.cNews__cate}>
                  <span>採用情報</span>
                </p>
                <div className={styles.cNews__ttl}>
                  <p>世界各国との取引を行う社員を募集していますmax1行</p>
                </div>
              </a>
            </li>
            <li>
              <a className={styles.cNews} href="#">
                <span className={styles.cNews__date}>2022.12.12</span>
                <p className={styles.cNews__cate}>
                  <span>採用情報</span>
                </p>
                <div className={styles.cNews__ttl}>
                  <p>世界各国との取引を行う社員を募集していますmax1行</p>
                </div>
              </a>
            </li>
            <li>
              <a className={styles.cNews} href="#">
                <span className={styles.cNews__date}>2022.12.12</span>
                <p className={styles.cNews__cate}>
                  <span>採用情報</span>
                </p>
                <div className={styles.cNews__ttl}>
                  <p>世界各国との取引を行う社員を募集していますmax1行</p>
                </div>
              </a>
            </li>
          </ul>
          <div className={styles.btn01}>
            <a
              className={`${styles.cBtn01} ${styles.cBtn01__center}`}
              href="/news/"
            >
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeNews };
