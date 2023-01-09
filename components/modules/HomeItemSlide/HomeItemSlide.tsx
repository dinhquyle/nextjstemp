import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import styles from "@/styles/page-styles/Home.module.scss";


function HomeItemSlide(): JSX.Element {
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
  return (
    <>
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
    </>
  );
}

export { HomeItemSlide };
