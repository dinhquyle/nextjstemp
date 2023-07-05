import * as React from "react";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import { CaseCat, CasePaging, TProduct } from "@/common/contexts/AppContext";
import styles from "@/styles/page-styles/Cases.module.scss";

// types
import { GetStaticProps } from "next";
import { GQL_URI } from "@/common/constants";

type TCaseProps = {
  caseList: Array<TProduct>;
  caseCat: Array<CaseCat>;
  casePaging: CasePaging;
}

const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String) {
    cases(first: $first, after: $after) {
      nodes {
        title
        content
        uri
        date 
        featuredImage {
          node {
            sourceUrl
          }
        }
        categoriesCase {
          nodes {
            name
            uri
            id
          }
        }
        mainImg {
          mainImage {
            sourceUrl
          }
        }     
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
      }
    }
  }
`;
const paging = 15;

const Cases = ({ caseList, caseCat, casePaging }: TCaseProps) => {

  let noImg = "/images/common/other/img_nophoto.jpg"
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
          <div className={styles.listCat}>
          {caseCat.map((cat: any) => (
            <p className={styles.cat} key={cat.id}><a href={cat.uri.replace("dinhquy/", "")}>{cat.name}</a></p>
          ))}
          </div>
          <div className={styles.list}>
          {caseList.map((product, i) => (
            <div className={styles.item} key={i}>
            <a href={product.uri} className={styles.box}>
              {
                product.featuredImage != null ? (
                  <p className={styles.img}>
                    <Image
                      src={product.featuredImage.node.sourceUrl}
                      alt=""
                      width={460}
                      height={320}
                    />
                  </p>
                ) : ( 
                  product.mainImg.mainImage != null ? (
                    <p className={styles.img}>
                      <Image
                        src={product.mainImg.mainImage.sourceUrl}
                        alt=""
                        width={460}
                        height={320}
                      />
                    </p>
                  ) : (
                    <p className={styles.img}>
                      <Image
                        src={noImg}
                        alt=""
                        width={460}
                        height={320}
                      />
                    </p>
                  )
                ) 
              }
                
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
          
          <div className={styles.nextPrevBox}>
            {
              casePaging.hasPreviousPage === true ? (
                <div className={styles.prevBox}><a href="/cases/">Prev</a></div>
              ) : (
                <span></span>
              )
            }
            {
              casePaging.hasNextPage === true ? (
                <div className={styles.nextBox}><a href="/cases/">Next</a></div>
              ) : (
                <span></span>
              )
            }   
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
        query: `query getCases($first: Int!, $after: String) {
          cases(first: $first, after: $after) {
            nodes {
              title
              content
              uri
              date 
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categoriesCase {
                nodes {
                  name
                  uri
                  id
                }
              }
              mainImg {
                mainImage {
                  sourceUrl
                }
              }     
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
            }
          }
          categoriesCase {
            nodes {
              id
              uri
              name
            }
          }
        }`,
        operationName: `getCases`,
        variables: {
          'first': paging,
          'after': null
        }
      })
    });
    if(res.ok){
      const data = await res.json();
      if(data.errors) {
        throw new Error(`Error fetch Cases $(data.errors[0].message)`);
      }
      return {
        props: {
          caseList: data.data.cases.nodes,
          caseCat: data.data.categoriesCase.nodes,
          casePaging: data.data.cases.pageInfo,
        },
      }
    } else{
      const message = await res.json();
      throw new Error(`Error fetch Cases $(message.message)`);
    }
  } catch(error) {
    console.log(error)
    return{
      notFound: true,
    }
  }
};

export default Cases;
