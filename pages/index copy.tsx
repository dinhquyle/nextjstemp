import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useInView } from 'react-intersection-observer';
import "@splidejs/react-splide/css";
import Image from "next/image";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import styles from "@/styles/page-styles/Home.module.scss";
// types
import { TNextPageWithLayout } from "@/common/types";

const Home: TNextPageWithLayout = (): JSX.Element => {

  const [ref, isInView] = useInView({
    threshold: 1,
    initialInView: true,
  });

  const [isVisible, setVisible] = useState(false);  
  const imgAniRef = useRef<HTMLDivElement>(null);

  const url = "https://6264f60294374a2c506b97c9.mockapi.io/posts";
  const [posts, setPosts] = useState<any[]>([]);  
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const _mv = document.getElementById(`sec__mv`);
    const _isInview = styles.isInview;
    const body = document.querySelector(`body`);

    if (body != null) {
      body.classList.add(styles.top);
    }
    setTimeout(() => {
      if (_mv != null) {
        _mv.classList.add(_isInview);
      }
      if (body != null) {
        body.classList.add(_isInview);
      }
    }, 999);

    let height = window.innerHeight;
    if( window.innerWidth < 1000 ){
      if(  _mv ){
        _mv.style.height = height+'px';
      }
    }
    return;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        if (imgAniRef.current) {
          observer.unobserve(imgAniRef.current);
        }
      }
    });
    if (imgAniRef.current) {
      observer.observe(imgAniRef.current);
    }
    return () => observer.disconnect();
    
  }, []);

  const targetElement = useRef<HTMLDivElement>(null);
  const scrollingTop = () => {
    const elmnt = targetElement;
    if( elmnt.current ){
      let headerHeight = 100;
      if( window.innerWidth < 1000 ){
        headerHeight = 70;
      }
      let scrollTo = elmnt.current.offsetTop - headerHeight;
      window.scroll({ 
        top: scrollTo, 
        behavior: "smooth" 
      });
    }
  };
  
  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <meta name="description" content="Dinh Quy Le" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.top}>      
        <div className={styles.sec_mv} id="sec__mv">
          <Splide
            options={{
              perPage: 1,
              pagination: false,
              speed: 1000,
              arrows: false,
            }}
            className={styles.slide}
          >
            <SplideSlide className={styles.item}>
              <span className={styles.pc}>
                <Image
                  src="/images/top/mv_img01.jpg"
                  alt=""
                  width={1400}
                  height={850}
                />
              </span>       
              <span className={styles.sp}>
                <Image
                  src="/images/top/mv_img01_sp.jpg"
                  alt=""
                  width={375}
                  height={668}
                />
              </span>              
            </SplideSlide>
            <SplideSlide className={styles.item}>
              <span className={styles.pc}>
                <Image
                  src="/images/top/mv_img02.jpg"
                  alt=""
                  width={1400}
                  height={850}
                />
              </span>       
              <span className={styles.sp}>
                <Image
                  src="/images/top/mv_img02_sp.jpg"
                  alt=""
                  width={375}
                  height={668}
                />
              </span>
            </SplideSlide>
            <SplideSlide className={styles.item}>
              <span className={styles.pc}>
                <Image
                  src="/images/top/mv_img03.jpg"
                  alt=""
                  width={1400}
                  height={850}
                />
              </span>       
              <span className={styles.sp}>
                <Image
                  src="/images/top/mv_img03_sp.jpg"
                  alt=""
                  width={375}
                  height={668}
                />
              </span>
            </SplideSlide>
          </Splide>

          <div className={styles.ttl_main}>
            <p className={styles.ttl_en}>
              Step Quicker <br />
              See Wider <br />
              Think Deeper
            </p>
            <p className={styles.ttl_ja}>一歩迅く、一歩広く、一歩深く</p>
          </div>
          <p className={styles.scrolldown}>
            <span className={styles.txt} onClick={scrollingTop}>
              SCROLL DOWN
            </span>
          </p>
        </div>
        <p id="scrollto"></p>

        <div className={styles.secNews}>
          <div className={`${styles.container} ${styles.inner}`}>
            <div className={styles.cTtl01}>
              <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}>
                <span className={styles.splitText}>News</span>
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

        <div className={styles.secExport} id="export" ref={targetElement}>
          <div
            className={`${styles.bg01} ${styles.cLazybg} ${styles.cImgAni} ${isInView ? `${styles.isInview}` : ''}`} ref={ref}
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
                          <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                        <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                        <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                      <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                      <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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

        <div className={styles.secImport}>
          <div
            className={`${styles.bg01} ${styles.cLazybg} ${styles.cImgAni} ${styles.right} ${isInView ? `${styles.isInview}` : ''}`} ref={ref}
          ></div>
          <div className={`${styles.container} ${styles.w1120}`}>
            <div className={styles.inner}>
              <div className={styles.inner__left}>
                <div
                  className={`${styles.cTtl01} ${styles.cTtl01__2line} ${styles.cTtl01__white}`}
                >
                  <p className={`${styles.cTtl01__en} ${styles.jsSplitText}`}>
                    <span className={styles.splitText}>Import</span>
                  </p>
                  <h2 className={`${styles.cTtl01__ja} ${styles.jsSplitText}`}>
                    <span className={styles.splitText}>
                      日本国内のバイヤーの方へ
                    </span>
                  </h2>
                </div>
                <div className={styles.pTxt01}>
                  <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </div>
              </div>
              <div className={styles.inner__right}>
                <ul className={styles.pLstCard}>
                  <li>
                    <a className={styles.pCard} href="/import_business/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
                            <Image
                              src="/images/top/import01.jpg"
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
                            Import &nbsp;&nbsp;&nbsp;
                            <br className={styles.sp} />
                            Business
                          </p>
                          <h3 className={styles.pCard__txtJa}>輸入事業</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className={styles.pCard} href="/import_goods/">
                      <div className={styles.pCard__img}>
                        <div className={styles.pCard__imgIn}>
                          <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
                            <Image
                              src="/images/top/import02.jpg"
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
                            Import &nbsp;&nbsp;&nbsp;
                            <br className={styles.sp} />
                            Goods
                          </p>
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
                      <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
                        <Image
                          src="/images/temp/case04.jpg"
                          alt=""
                          width={300}
                          height={225}
                        />
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
                      <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                      </p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
                    </p>
                  </a>
                </div>

                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
                        <Image
                          src="/images/temp/case05.jpg"
                          alt=""
                          width={300}
                          height={225}
                        />
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
                      <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                      </p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
                    </p>
                  </a>
                </div>
                <div className={styles.swiperSlide}>
                  <a className={styles.cCase} href="#">
                    <div className={styles.cCase__img}>
                      <span className={`${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
                        <Image
                          src="/images/temp/case06.jpg"
                          alt=""
                          width={300}
                          height={225}
                        />
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
                      <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                      </p>
                    </div>
                    <p className={styles.cCase__cate02}>
                      <span>雑貨・その他</span>
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
                    <div className={`${styles.item__imgIn} ${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                    <div className={`${styles.item__imgIn} ${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                   <div className={`${styles.item__imgIn} ${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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
                    <div className={`${styles.item__imgIn} ${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}>
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

        <div className={styles.secSlideFull}>
          <div className={styles.innerbox}>
            <div className="cTtl01 cTtl01__2line cTtl01__center">
              <p className="cTtl01__en jsSplitText">
                <span className="splitText">About Us</span>
              </p>
              <h2 className="cTtl01__ja jsSplitText">
                <span className="splitText">井元産業について</span>
              </h2>
            </div>
            <div
              className={`${styles.swiperContainer} ${styles.slidebox} ${styles.jsSlideFull}`}
            >
              <Splide
                options={{
                  perPage: 4,
                  gap: `16px`,
                  pagination: false,
                  arrows: false,
                  breakpoints: {
                    1340: { perPage: 3 },
                    840: { perPage: 2 },
                    580: { perPage: 1, gap: `8px` },
                    360: { perPage: 1, gap: 0 },
                  },
                }}
                className={`${styles.lstItem} ${styles.is_slider}`}
              >
                {posts.map((post, index) => (
                <SplideSlide key={index}
                  className={`${styles.itemSlide} ${styles.swiperSlide}`}
                >
                  <a className={styles.item} href="/about/#philosophy">
                    <div className={styles.item__img}>
                      <div
                        className={`${styles.item__imgIn} ${styles.cImgAni} ${isVisible ? `${styles.isInview}` : ''}`} ref={imgAniRef}
                      >
                        
                        <Image
                          src={post.imgUrl+`?v={post.id}`}
                          alt={post.title}
                          width={280}
                          height={210}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={styles.item__info}>
                      <div>
                        <p className={`${styles.item__txtEn}`}>{post.title}</p>
                        {/* <h3 className={`${styles.item__txtJa}`}>{post.title}</h3> */}
                      </div>
                    </div>
                  </a>
                </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>

      </main>
    </>
  )
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export default Home;
