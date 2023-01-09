import * as React from "react";
import { useEffect } from "react";
import "@splidejs/react-splide/css";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";

import { HomeMvSlide } from "@/components/modules/HomeMvSlide";
import { HomeNews } from "@/components/modules/HomeNews";
import { HomeExport } from "@/components/modules/HomeExport";
import { HomeCaseExport } from "@/components/modules/HomeCaseExport";
import { HomeImport } from "@/components/modules/HomeImport";
import { HomeCaseImport } from "@/components/modules/HomeCaseImport";
import { HomeAboutus } from "@/components/modules/HomeAboutus";
import { HomeItemSlide } from "@/components/modules/HomeItemSlide";

import styles from "@/styles/page-styles/Home.module.scss";
// types
import { TNextPageWithLayout } from "@/common/types";

const Home: TNextPageWithLayout = (): JSX.Element => {
  
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
  
  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <meta name="description" content="Dinh Quy Le" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.top}>    
          
        <HomeMvSlide />
        <p id="scrollto"></p>

        <HomeNews />

        <HomeExport />

        <HomeCaseExport />

        <HomeImport />

        <HomeCaseImport />

        <HomeAboutus />

        <HomeItemSlide />

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
