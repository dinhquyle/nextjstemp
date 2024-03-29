// types
import * as React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { GQL_URI } from "@/common/constants";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import styles from "@/styles/page-styles/Cases.module.scss";

import Head from "next/head";

const CaseDetail = ({ product }: { product: any}) => {
  let noImg = "/images/common/other/img_nophoto.jpg"
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
            <a href="/cases/">取引商品・実績</a>
            </li>
            <li>
              <span>{product[0].title}</span>
            </li>
          </ul>
        </div>
        <section className={styles.masonrybox}>
          <h2 className={`${styles.ttlCommon} ${styles.en}`}>CASES<span><i className={`${styles.fa} ${styles.fa_instagram}`} aria-hidden="true">*</i></span></h2>
          <div className={styles.single}>
            {product.map((item: any) => (
              <div className={styles.innerbox} key={item.caseId}>
                <h3 className={styles.ttl}>{item.title}</h3>
                <p className={styles.txtcat}>
                  {item.categoriesCase.nodes.map((cat: any) => (
                    <span key={cat.id}>{cat.name}</span>
                  ))}
                </p>
                {
                item.featuredImage != null ? (
                  <p className={styles.img}>
                    <Image
                      src={item.featuredImage.node.sourceUrl}
                      alt=""
                      width={1020}
                      height={628}
                    />
                  </p>
                ) : ( 
                  item.mainImg.mainImage != null ? (
                    <p className={styles.img}>
                      <Image
                        src={item.mainImg.mainImage.sourceUrl}
                        alt=""
                        width={1020}
                        height={628}
                      />
                    </p>
                  ) : (
                    <span></span>
                  )
                ) 
              }
                <div className={styles.txtbox}>                
                  <div className={styles.text}>{item.content.replace(/(<([^>]+)>)/gi, "")}</div>
                </div>
              </div>
            ))}
            <div className={styles.txtBack}>
              <a href="/cases/" className={styles.box}>一覧に戻る</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
};

CaseDetail.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  let paths:Array<any>;
  try{
    const res = await fetch(GQL_URI, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,        
      },
      body: JSON.stringify({
        query: `query getCasesId {
          cases {
            nodes {
              caseId
            }
          }
        }`,
        operationName: `getCasesId`,
      })
    });
    const data = await res.json();
    
    if(res.ok){      
      paths = data.data.cases.nodes.map((item: any) => {
        return {
          params: {
            id: item.caseId.toString(), 
          }
        }
      });
      return {
        paths,
        fallback: `blocking`
      }
    } else{
      throw new Error(`Error fetch Cases $(data.message)`);
    }
  } catch(error) {
    console.error('Error while get paths of detail');
  }
  return {
    paths: [],
    fallback: false // 404
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  try{
    if( !params ) throw new Error(`Missing params`); 
    let { id } = params;
    if( !id ) throw new Error(`Missing slug`); 
    id = id.toString().replace("p", "");
    const res = await fetch(GQL_URI, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,        
      },
      body: JSON.stringify({
        query: `query getCasesById {
          cases(where: {id: ${id}}) {
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
              mainImg {
                mainImage {
                  sourceUrl
                }
              }     
            }
          }
        }`,
        operationName: `getCasesById`,
      })
    });
    if(res.ok){
      const data = await res.json();
      if(data.errors) {
        throw new Error(`Error fetch Cases $(data.errors[0].message)`);
      }
      return {
        props: {
          product: data.data.cases.nodes,
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

export default CaseDetail;