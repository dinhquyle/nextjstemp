import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import { CaseCat, CasebyCat } from "@/common/contexts/AppContext";
import styles from "@/styles/page-styles/Cases.module.scss";

// types
import { GetStaticPaths, GetStaticProps } from "next";
import { GQL_URI } from "@/common/constants";
type TCaseProps = {
  caseList: Array<CasebyCat>;
  slug: string;
  caseCat: Array<CaseCat>;
}
const CaseArchive = ({ caseList, slug, caseCat }: TCaseProps) => {
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
            <p className="cMv__ttlen">Cases Category</p>
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
              <span>{slug}</span>
            </li>
          </ul>
        </div>

        <section className={styles.masonrybox}>
          <h2 className={`${styles.ttlCommon} ${styles.en}`}>CASES<span><i className={`${styles.fa} ${styles.fa_instagram}`} aria-hidden="true">*</i></span></h2>
          <div className={styles.listCat}>
          {caseCat.map((cat: any) => (
            <p className={`${styles.cat} ${slug==cat.name?styles.active:''}`} key={cat.id}><a href={cat.uri.replace(/dinhquy/g, "cases")}>{cat.name}</a></p>
          ))}
          </div>
          <div className={styles.list}>
          {caseList.map((item, i) => (
            <div className={styles.item} key={i}>
            <a href={item.uri} className={styles.box}>
              {
                item.featuredImage != null ? (
                  <p className={styles.img}>
                    <Image
                      src={item.featuredImage.node.sourceUrl}
                      alt=""
                      width={460}
                      height={320}
                    />
                  </p>
                ) : ( 
                  item.mainImg.mainImage != null ? (
                    <p className={styles.img}>
                      <Image
                        src={item.mainImg.mainImage.sourceUrl}
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
                    {item.categoriesCase.nodes.map((cat: any) => (
                      <span key={cat.id}>{cat.name}</span>
                    ))}
                    <span className={styles.txtdate}>{new Date(item.date).toISOString().split('T')[0].replace(/-/g, ".")}</span>
                  </p>
                  <h3 className={styles.ttl}>{item.title}</h3>
                  <div className={styles.text}>{item.content.replace(/(<([^>]+)>)/gi, "")}</div>
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
CaseArchive.getLayout = function getLayout(page: React.ReactElement) {
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
        query: `query getCategory {
          categoriesCase {
            nodes {
              slug
            }
          }
        }`,
        operationName: `getCategory`,
      })
    });
    const data = await res.json();
    if(res.ok){      
      paths = data.data.categoriesCase.nodes.map((item: any) => {
        return {
          params: {
            slug: item.slug, 
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
    let { slug } = params;
    if( !slug ) throw new Error(`Missing slug`); 
    const res = await fetch(GQL_URI, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,        
      },
      body: JSON.stringify({
        query: `query getCasesByCategory {
          categoriesCase(where: {slug: "${slug}"}) {
            nodes {
              cases {
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
                  mainImg {
                    mainImage {
                      sourceUrl
                    }
                  }  
                  categoriesCase {
                    nodes {
                      id
                      name
                      uri
                    }
                  }
                }
              }
            }
          }
          catAll: categoriesCase {
            nodes {
              id
              uri
              name
            }
          }
        }`,
        operationName: `getCasesByCategory`,
      })
    });
    if(res.ok){
      const data = await res.json();
      if(data.errors) {
        throw new Error(`Error fetch Cases $(data.errors[0].message)`);
      }
      return {
        props: {
          caseList: data.data.categoriesCase.nodes[0].cases.nodes,
          slug: slug,
          caseCat: data.data.catAll.nodes,
        }
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

export default CaseArchive;