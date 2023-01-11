import Image from "next/image";
import stylesCom from "@/styles/page-styles/Home.module.scss";

function HomeCaseImport(): JSX.Element {
  return (
    <>
      <div className={stylesCom.secCase}>
        <div className={`${stylesCom.container} ${stylesCom.inner}`}>
          <div className={stylesCom.cTtl01}>
            <p
              className={`${stylesCom.cTtl01__en} ${stylesCom.fs26} ${stylesCom.jsSplitText}`}
            >
              <span className={stylesCom.splitText}>Cases</span>
            </p>
            <h3
              className={`${stylesCom.cTtl01__ja} ${stylesCom.fs15} ${stylesCom.jsSplitText}`}
            >
              <span className={stylesCom.splitText}>取引商品・実績</span>
            </h3>
          </div>
          <div className={stylesCom.lstCase}>
            <div className={stylesCom.swiperWrapper}>
              <div className={stylesCom.swiperSlide}>
                <a className={stylesCom.cCase} href="#">
                  <div className={stylesCom.cCase__img}>
                    <span className={`${stylesCom.cImgAni}`}>
                      <Image
                        src="/images/temp/case04.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={stylesCom.cCase__cate01}>
                      <span>Import</span>
                    </p>
                  </div>
                  <div className={stylesCom.cCase__ttl}>
                    <div className={stylesCom.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={stylesCom.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={stylesCom.cCase__cate02}>
                    <span>雑貨・その他</span>
                  </p>
                </a>
              </div>

              <div className={stylesCom.swiperSlide}>
                <a className={stylesCom.cCase} href="#">
                  <div className={stylesCom.cCase__img}>
                    <span className={`${stylesCom.cImgAni}`}>
                      <Image
                        src="/images/temp/case05.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={stylesCom.cCase__cate01}>
                      <span>Import</span>
                    </p>
                  </div>
                  <div className={stylesCom.cCase__ttl}>
                    <div className={stylesCom.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={stylesCom.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={stylesCom.cCase__cate02}>
                    <span>雑貨・その他</span>
                  </p>
                </a>
              </div>
              <div className={stylesCom.swiperSlide}>
                <a className={stylesCom.cCase} href="#">
                  <div className={stylesCom.cCase__img}>
                    <span className={`${stylesCom.cImgAni}`}>
                      <Image
                        src="/images/temp/case06.jpg"
                        alt=""
                        width={300}
                        height={225}
                      />
                    </span>
                    <p className={stylesCom.cCase__cate01}>
                      <span>Import</span>
                    </p>
                  </div>
                  <div className={stylesCom.cCase__ttl}>
                    <div className={stylesCom.jsHeight}>
                      <p>タイトルが入りますタイトル</p>
                    </div>
                  </div>
                  <div className={stylesCom.cCase__txt}>
                    <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                  <p className={stylesCom.cCase__cate02}>
                    <span>雑貨・その他</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className={stylesCom.btn01}>
            <a
              className={`${stylesCom.cBtn01} ${stylesCom.cBtn01__center}`}
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

export { HomeCaseImport };
