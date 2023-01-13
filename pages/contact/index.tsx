import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import { ContactForm } from "@/components/modules/ContactForm";
import styles from "@/styles/page-styles/Contact.module.scss";

// types
import { TNextPageWithLayout } from "@/common/types";

const Contact: TNextPageWithLayout = (): JSX.Element => {
  useEffect(() => {
    const body = document.querySelector(`body`);

    if (body != null) {
      body.classList.add('contact');
    }
    return;
  }, []);
  
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta httpEquiv="expires" content="86400" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Dinh Quy Le" />        
      </Head>
      <main id="wrap">
        <div className={`${styles.cMvContact} cMv`}>
          <div className="cMv__ttl">
            <p className="cMv__ttlen">Contact</p>
            <h2 className="cMv__ttlja">お問い合わせ</h2>
          </div>
        </div>
        <p id="scrollto"></p>
        <div className="cBreadcrumb">
          <ul>
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>
              <span>お問い合わせ</span>
            </li>
          </ul>
        </div>

        <div className={styles.lForm}>
          <div className="container">
            <div className={styles.txt01Form}>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br className="pc" />テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className={styles.note01Form}>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="cTtl01 cTtl01--2line cTtl01--center">
              <p className="cTtl01__en">Mail Form</p>
              <h3 className="cTtl01__ja">メールフォームからのお問い合わせ</h3>
            </div>
            <div className={styles.txt02Form}>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト</p>
            </div>
            
            <ContactForm />

          </div>
        </div>
      </main>
    </>
  )
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export default Contact;
