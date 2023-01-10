import { useEffect, useRef, useState, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BtnScrollContext } from "@/common/contexts/scroll-btn-context";
import Image from "next/image";
import styles from "@/styles/page-styles/Home.module.scss";

function HomeMvSlide(): JSX.Element {
  const targetElement = useRef<HTMLDivElement>(null);
  const menuContext = useContext(BtnScrollContext);
  
  const scrollingTop = () => {
    const elmnt = targetElement;
    console.log(menuContext);
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
    </>
  );
}

export { HomeMvSlide };
