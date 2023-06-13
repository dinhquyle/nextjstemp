import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import { TProduct } from "@/common/contexts/AppContext";
import styles from "@/styles/page-styles/Cases.module.scss";

// types
import { GetStaticProps } from "next";
import { GQL_URI } from "@/common/constants";

type TCaseProps = {
  caseList: Array<TProduct>;
}

const Cases = ({ caseList }: TCaseProps) => {
  useEffect(() => {
    const body = document.querySelector(`body`);

    if (body != null) {
      body.classList.add(styles.cases);
    }

    return;
  }, []);
  return (
    <>
      <Head>
        <title>Cases</title>
        <meta httpEquiv="expires" content="86400" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Cases" />        
      </Head>
      <main id="wrap">
        <div className={`${styles.cMvImport} cMv`}>
          <div className="cMv__ttl">
            <p className="cMv__ttlen">Cases</p>
            <h2 className="cMv__ttlja">取引商品・実績</h2>
          </div>
        </div>
        <p id="scrollto"></p>
        <div className="cBreadcrumb">
          <ul>
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>
              <span>取引商品・実績</span>
            </li>
          </ul>
        </div>

        <section className={styles.masonrybox}>
          <h2 className={`${styles.ttlCommon} ${styles.en}`}>CASES<span><i className={`${styles.fa} ${styles.fa_instagram}`} aria-hidden="true">*</i></span></h2>
          <div className={styles.list}>
          {caseList.map((product) => (
            <div className={styles.item} key={product.caseId}>
            <a href={product.uri} className={styles.box}>
                <p className={styles.img}>
                  <Image
                    src={product.featuredImage.node.sourceUrl}
                    alt=""
                    width={460}
                    height={460}
                  />
                </p>
                <div className={styles.txtbox}>
                  <p className={styles.txtcat}>
                    {product.categoriesCase.nodes.map((cat: any) => (
                      <span key={cat.id}>{cat.name}</span>
                    ))}
                    <span className={styles.txtdate}>{new Date(product.date).toISOString().split('T')[0].replace(/-/g, ".")}</span>
                  </p>
                  <h3 className={styles.ttl}>{product.title}</h3>
                  <div className={styles.text}>{product.content.replace(/(<([^>]+)>)/gi, "")}</div>
                </div>
              </a>
            </div>
          ))}
          </div>
        </section>

      </main>
    </>
  )
};

Cases.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try{
    const res = await fetch(GQL_URI, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,        
      },
      body: JSON.stringify({
        query: `query getCases {
          cases {
            nodes {
              caseId
              title
              content
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categoriesCase {
                nodes {
                  name
                  slug
                  id
                }
              }
              date
            }
          }
        }`,
        operationName: `getCases`,
      })
    });
    if(res.ok){
      const data = await res.json();
      if(data.errors) {
        throw new Error(`Error fetch Cases $(data.errors[0].message)`);
      }
      console.log(data.data.cases.nodes)
      return {
        props: {
          caseList: data.data.cases.nodes,
        }
      }
    } else{
      const message = await res.json();
      throw new Error(`Error fetch Cases $(message.message)`);
    }
  } catch(error) {
    return{
      notFound: true,
    }
  }
};

export default Cases;
