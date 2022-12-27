import * as React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import styles from "@/styles/page-styles/Home.module.scss";
// types
import { TNextPageWithLayout } from "@/common/types";

const Home: TNextPageWithLayout = (): JSX.Element => {

  const [state, setState] = useState(0)

  useEffect(() => {   
    const _mv = document.getElementById(`sec__mv`);
    const _isInview = styles.isInview;
    setTimeout(() => {
      if( _mv != null){
       _mv.classList.add(_isInview);
      }
    }, 900);

    window.addEventListener(`scroll`, listenScroll);

    return
  }, []);
  
  const listenScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = window.innerHeight * 2/3;
    const pScroll = winScroll + height;
    console.log(document.querySelectorAll(`.cImgAni`));
    document.querySelectorAll(`.cImgAni`).forEach( e => {
      console.log(e.scrollIntoView);
      const pThis = this.offsetTop - 170;
      if(pThis < pScroll) {
        console.log(e.scrollIntoView(true));
      }
      else{
        console.log(e.scrollIntoView(false));
      }
    });
  };
  return (
    <>
      <Head>
        <title>Temp</title>
        <meta name="description" content="description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.top}>

        <div className={styles.sec_mv} id="sec__mv">
          <div className={styles.slide}>
            <div className={styles.item}><Image src="/images/top/mv_img01.jpg" alt="" width={1400} height={850} /></div>
          </div>
          <div className={styles.ttl_main}>
            <p className={styles.ttl_en}>Step Quicker <br />See Wider <br />Think Deeper</p>
            <p className={styles.ttl_ja}>一歩迅く、一歩広く、一歩深く</p>
          </div>
          <p className={styles.scrolldown}>
            <a href="#export" className={styles.txt}>SCROLL DOWN</a>
          </p>
        </div>
        <p id="scrollto"></p>     

        <div className={styles.secNews}>
          <div className={`${styles.container} ${styles.inner}`}>
            <div className={styles.cTtl01}>
              <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}><span className={styles.splitText}>News</span></p>
              <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}><span className={styles.splitText}>お知らせ・コラム</span></h2>
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
              <a className={`${styles.cBtn01} ${styles.cBtn01__center}`} href="/news/">
                <span>View All</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.secExport} id="export">
          <div className={`${styles.bg01} ${styles.cLazybg} ${styles.cImgAni}`}></div>
          <div className={`${styles.container} ${styles.w1120}`}>
            <div className={styles.inner}>
              <div className={styles.inner__left}>
                <div className={`${styles.cTtl01} ${styles.cTtl01__tline} ${styles.cTtl01__white}`}>
                  <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}><span className={styles.splitText}>Export</span></p>
                  <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}><span className={styles.splitText}>海外のバイヤーの方へ</span></h2>
                </div>
                <div className={styles.pTxt01}>
                  <p>MADE in JAPANの高品質な製品を世界に届けるために、井元産業があらゆる貿易業務を代行します。</p>
                </div>
              </div>
              <div className={styles.inner__right}>
                <ul className={styles.pLstCard}>
                  <li>
                    <a className={styles.pCard} href="/export_business/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={styles.cImgAni}>
                            <Image src="/images/top/export01.jpg" alt="" width={360} height={280} />
                          </span>
                        </div>
                      </div>
                      <div className={styles.pCard__info}>
                        <div>
                          <p className={styles.pCard__txtEn}>Export &nbsp;&nbsp;&nbsp;<br className={styles.sp} />Business</p>
                          <h3 className={styles.pCard__txtJa}>輸出事業</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className={styles.pCard} href="/export_goods/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={styles.cImgAni}>
                            <Image src="/images/top/export02.jpg" alt="" width={360} height={280} />
                          </span>
                        </div>
                      </div>
                      <div className={styles.pCard__info}>
                        <div>
                          <p className={styles.pCard__txtEn}>Export &nbsp;&nbsp;&nbsp;<br className={styles.sp} />Goods</p>
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

        <div className={styles.secCase}>
          <div className={`${styles.container} ${styles.inner}`}>
            <div className={styles.cTtl01}>
              <p className={`${styles.cTtl01__en} ${styles.fs26} ${styles.jsSplitText}`}><span className={styles.splitText}>Cases</span></p>
              <h3 className={`${styles.cTtl01__ja} ${styles.fs15} ${styles.jsSplitText}`}><span className={styles.splitText}>取引商品・実績</span></h3>
            </div>
            <div className={styles.lstCase}>
              <div className={styles.swiperWrapper}>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case01.jpg" alt="" width={300} height={225} />
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
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>陶磁器テーブルウェア</span>
                    </p>
                  </a>
                </div>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case02.jpg" alt="" width={300} height={225} />
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
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>陶磁器テーブルウェア</span>
                    </p>
                  </a>
                </div>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case03.jpg" alt="" width={300} height={225} />
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
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>陶磁器テーブルウェア</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.btn01}>
              <a className={`${styles.cBtn01} ${styles.cBtn01__center}`} href="/cases/">
                <span>View All</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.secImport}>
          <div className={`${styles.bg01} ${styles.cLazybg} ${styles.cImgAni} ${styles.right}`}></div>
          <div className={`${styles.container} ${styles.w1120}`}>
            <div className={styles.inner}>
              <div className={styles.inner__left}>
                <div className={`${styles.cTtl01} ${styles.cTtl01__2line} ${styles.cTtl01__white}`}>
                  <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}><span className={styles.splitText}>Import</span></p>
                  <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}><span className={styles.splitText}>日本国内のバイヤーの方へ</span></h2>
                </div>
                <div className={styles.pTxt01}>
                  <p>海外の安価で優れた製品を日本に供給するために、井元産業があらゆる貿易業務を代行します。</p>
                </div>
              </div>
              <div className={styles.inner__right}>
                <ul className={styles.pLstCard}>
                  <li>
                    <a className={styles.pCard} href="/import_business/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={styles.cImgAni}>
                            <Image src="/images/top/import01.jpg" alt="" width={360} height={280} />
                          </span>
                        </div>
                      </div>
                      <div className={styles.pCard__info}>
                        <div>
                          <p className={styles.pCard__txtEn}>Import &nbsp;&nbsp;&nbsp;<br className={styles.sp} />Business</p>
                          <h3 className={styles.pCard__txtJa}>輸入事業</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className={styles.pCard} href="/import_goods/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={styles.cImgAni}>
                            <Image src="/images/top/import02.jpg" alt="" width={360} height={280} />
                          </span>
                        </div>
                      </div>
                      <div className={styles.pCard__info}>
                        <div>
                          <p className={styles.pCard__txtEn}>Import &nbsp;&nbsp;&nbsp;<br className={styles.sp} />Goods</p>
                          <h3 className={styles.pCard__txtJa}>輸入商品</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secCase}>
          <div className={`${styles.container} ${styles.inner}`}>
            <div className={styles.cTtl01}>
              <p className={`${styles.cTtl01__en} ${styles.fs26} ${styles.jsSplitText}`}><span className={styles.splitText}>Cases</span></p>
              <h3 className={`${styles.cTtl01__ja} ${styles.fs15} ${styles.jsSplitText}`}><span className={styles.splitText}>取引商品・実績</span></h3>
            </div>
            <div className={styles.lstCase}>
              <div className={styles.swiperWrapper}>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case04.jpg" alt="" width={300} height={225} />
                      </span>
                      <p className={styles.cCase__cate01}>
                        <span>Import</span>
                      </p>
                    </div>
                    <div className={styles.cCase__ttl}>
                      <div className={styles.jsHeight}>
                        <p>タイトルが入りますタイトル</p>
                      </div>
                    </div>
                    <div className={styles.cCase__txt}>
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
                    </p>
                  </a>
                </div>
                
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case05.jpg" alt="" width={300} height={225} />
                      </span>
                      <p className={styles.cCase__cate01}>
                        <span>Import</span>
                      </p>
                    </div>
                    <div className={styles.cCase__ttl}>
                      <div className={styles.jsHeight}>
                        <p>タイトルが入りますタイトル</p>
                      </div>
                    </div>
                    <div className={styles.cCase__txt}>
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
                    </p>
                  </a>
                </div>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={styles.cImgAni}>
                        <Image src="/images/temp/case06.jpg" alt="" width={300} height={225} />
                      </span>
                      <p className={styles.cCase__cate01}>
                        <span>Import</span>
                      </p>
                    </div>
                    <div className={styles.cCase__ttl}>
                      <div className={styles.jsHeight}>
                        <p>タイトルが入りますタイトル</p>
                      </div>
                    </div>
                    <div className={styles.cCase__txt}>
                      <p>納入先・仕入先の社名・業種が入ります納納入先・仕入先の社名・業種が入ります納</p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.btn01}>
              <a className={`${styles.cBtn01} ${styles.cBtn01__center}`} href="/cases/">
                <span>View All</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.secAbout}>
          <div className={styles.container}>
            <div className={`${styles.cTtl01} ${styles.cTtl01__2line} ${styles.cTtl01__center}`}>
              <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}>
                <span className={styles.splitText}>About Us</span>
              </p>
              <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}><span className={styles.splitText}>井元産業について</span></h2>
            </div>
            <ul className={styles.lstItem}>
              <li>
                <a className={styles.item} href="/about/#philosophy">
                  <div className={styles.item__img}>
                    <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                      <Image src="/images/top/about01.jpg" alt="井元産業の目指す姿" width={280} height={210} />
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
                      <Image src="/images/top/about02.jpg" alt="社長メッセージ" width={280} height={210} />
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
                      <Image src="/images/top/about03.jpg" alt="会社情報" width={280} height={210} />
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
                      <Image src="/images/top/about04.jpg" alt="関連会社" width={280} height={210} />
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

        <div className={styles.secSlideFull}>
          <div className={styles.innerbox}>
            <div className="cTtl01 cTtl01__2line cTtl01__center">
              <p className="cTtl01__en jsSplitText">
                <span className="splitText">About Us</span>
              </p>
              <h2 className="cTtl01__ja jsSplitText"><span className="splitText">井元産業について</span></h2>
            </div>
            <div className={`${styles.swiperContainer} ${styles.slidebox} ${styles.jsSlideFull}`}>
            <Splide options={ {
              perPage: 4,
              gap: `16px`,
              pagination: false,
              //focus  : 'center',
              // autoplay: true,
              // type   : `loop`,
              arrows: false,
              breakpoints: {
                1340: { perPage: 3 },
                840 : { perPage: 2 },
                580 : { perPage: 1, gap: 0 },
              },
            } } className={`${styles.lstItem} ${styles.is_slider}`}>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_01.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_02.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_03.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_04.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_05.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_06.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_07.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_08.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                <SplideSlide className={`${styles.itemSlide} ${styles.swiperSlide}`}>
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div className={`${styles.item__imgIn} ${styles.cImgAni}`}>
                        <Image src="/images/temp/hachiouji_09.jpg" alt="社長メッセージ" width={280} height={210} />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>Philosophy</p>
                        <h3 className={`${styles.item__txtJa}`}>井元産業の目指す姿</h3>
                      </div>
                    </div>
                  </a>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export default Home;
