import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import styles from "@/styles/page-styles/Importgoods.module.scss";

// types
import { TNextPageWithLayout } from "@/common/types";

const Importgoods: TNextPageWithLayout = (): JSX.Element => {
  useEffect(() => {
    const body = document.querySelector(`body`);

    if (body != null) {
      body.classList.add(styles.import_goods);
    }

    return;
  }, []);

  return (
    <>
      <Head>
        <title>Import Goods</title>
        <meta httpEquiv="expires" content="86400" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Import Goods" />        
      </Head>
      <main id="wrap">
        <div className={`${styles.cMvImport} cMv`}>
          <div className="cMv__ttl">
            <p className="cMv__ttlen">Import Goods</p>
            <h2 className="cMv__ttlja">輸入商品</h2>
          </div>
        </div>
        <p id="scrollto"></p>
        <div className="cBreadcrumb">
          <ul>
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>
              <span>輸入商品</span>
            </li>
          </ul>
        </div>

        <section className={styles.sectionBox1}>
          <div className="container w1120">
            <div className={styles.inbox}>
              <div className={styles.txtbox}>
                <div className="cTtl01 cTttl01--2line">
                  <p className="cTtl01__en">Ceramic ware</p>
                  <h3 className="cTtl01__ja">陶磁器</h3>
                </div>
                <p className={`${styles.img} sp`}>
                  <Image
                    src="/images/import_goods/img1-sp.jpg"
                    alt=""
                    width={325}
                    height={220}
                  />
                </p>
                <div className={styles.txt}>
                  陶磁器の一大生産国である中国やヨーロッパなどのメーカーから輸入した、伝統的で異国情緒あふれる食器や雑貨などを取り扱っています。
                </div>
                <div className={styles.cItembox}>
                  <h4 className={styles.ttl}><span>商品一例</span></h4>
                  <div className={`${styles.itembox} ${styles.itembox1}`}>
                    <h5 className={styles.item}><span>プレート</span></h5>
                    <h5 className={styles.item}><span>ボウル</span></h5>
                    <h5 className={styles.item}><span>マグカップ</span></h5>
                    <h5 className={styles.item}><span>ティーセット</span></h5>
                    <h5 className={styles.item}><span>土瓶</span></h5>
                    <h5 className={styles.item}><span>招き猫</span></h5>
                    <h5 className={styles.item}><span>置物</span></h5>
                    <h5 className={styles.item}><span>プランター</span></h5>
                  </div>
                </div>
              </div>
              <p className={`${styles.img} pc`}>
                <Image
                  src="/images/import_goods/img1.jpg"
                  alt=""
                  width={380}
                  height={380}
                />
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBox2}>
          <div className="container w1120">
            <div className={styles.inbox}>
              <div className={styles.box1}>
                <p className={`${styles.img} pc`}>
                  <Image
                    src="/images/import_goods/img2.jpg"
                    alt=""
                    width={380}
                    height={380}
                  />
                </p>
                <div className={styles.txtbox}>
                  <div className="cTtl01 cTtl01--2line">
                    <p className="cTtl01__en">Pet Products</p>
                    <h3 className="cTtl01__ja">ペット用品</h3>
                  </div>
                  <p className={`${styles.img} sp`}>
                    <Image
                      src="/images/import_goods/img1-sp.jpg"
                      alt=""
                      width={325}
                      height={220}
                    />
                  </p>
                  <div className={styles.txt}>
                    大手ペットショップや量販店で販売されている、機能的でおしゃれな海外ペット用品を多数取り扱っています。
                  </div>
                  <div className={styles.itemwrap}>
                    <div className={styles.cItembox}>
                      <h4 className={styles.ttl}><span>商品一例</span></h4>
                      <div className={`${styles.itembox} ${styles.itembox2}`}>
                        <h5 className={styles.item}><span>犬服</span></h5>
                        <h5 className={styles.item}><span>ベッド</span></h5>
                        <h5 className={styles.item}><span>キャットタワー</span></h5>
                        <h5 className={styles.item}><span>おもちゃ</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.sectionBox1} ${styles.sectionBox3} `}>
          <div className="container w1120">
            <div className={styles.inbox}>
              <div className={styles.txtbox}>
                <div className="cTtl01 cTtl01--2line">
                  <p className="cTtl01__en">General Goods</p>
                  <h3 className="cTtl01__ja">雑貨・その他</h3>
                </div>
                <p className={`${styles.img} sp`}>
                  <Image
                      src="/images/import_goods/img3-sp.jpg"
                      alt=""
                      width={325}
                      height={220}
                  />
                </p>
                <div className={styles.txt}>
                  雑貨やガーデン用品、家具、食品用包装容器など、コストパフォーマンスが高い多種多様な海外製の商品を取り扱っています。
                </div>
                <div className={styles.cItembox}>
                  <h4 className={styles.ttl}><span>商品一例</span></h4>
                  <div className={`${styles.itembox} ${styles.itembox3} `}>
                    <h5 className={styles.item}><span>ガーデン用品</span></h5>
                    <h5 className={styles.item}><span>インテリア用品</span></h5>
                    <h5 className={styles.item}><span>家具</span></h5>
                    <h5 className={styles.item}><span>食品用包装容器</span></h5>
                    <h5 className={styles.item}><span>傘</span></h5>
                  </div>
                </div>
              </div>
              <p className={`${styles.img} pc`}>
                <Image
                  src="/images/import_goods/img3.jpg"
                  alt=""
                  width={380}
                  height={380}
                />
              </p>
            </div>
          </div>
        </section>

        <div className={styles.bnrbox}>
          <a className={styles.block01} href="/cases">
            <div className={styles.block01__bg}>
              <div className={styles.block01__bgIn}></div>
            </div>
            <div className={styles.block01__ttl}>
              <div className="cTtl01 cTtl01--2line cTtl01--white">
                <p className="cTtl01__en">Cases</p>
                <h2 className="cTtl01__ja">取引商品・実績</h2>
              </div>
            </div>
            <div className={styles.txt}>その他にも多数の輸入商品を<br className="sp" />取り扱っています</div>
            <div className={styles.block01__icon}></div>
          </a>
        </div>

        <section className={styles.sectionBox8}>
          <div className="container">
            <div className="cTtl01 cTtl01--2line cTtl01--center">
              <p className="cTtl01__en">Original Goods</p>
              <h3 className="cTtl01__ja">お客様オリジナル商品の<br className="sp" />企画・販売も承ります</h3>
            </div>
            <div className={styles.itembox}>
              <div className={styles.item}>
                <div className={styles.txtmain}>
                  既製品への名入れ・絵付けだけでなく、お客様のオリジナル商品を企画段階から携わり製作することが可能です。信頼性の高い海外メーカーと連携し、綿密な打ち合わせやサンプルの企画などを行うことで、お客様に付加価値のある商品を提供します。
                </div>
                <div className={styles.box}>
                  <div className={`${styles.txtbox} ${styles.isfull}`}>
                    <h5 className={styles.ttlsub}>
                      <span className={styles.txt1}>企画実績(一例)</span>
                      <span className={styles.txt2}>ペットショップ向けの犬服</span>
                    </h5>
                    <div className={styles.txt}>
                      日本国内のペットショップにペット用品を卸しているバイヤーから、夏場でも売れる犬服を開発・販売したいと相談がありました。弊社の提案により、冷却効果のある新素材の生地を使用した犬用の服を海外メーカーと共同開発しました。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.clientbox}>
          <div className="container">
            <div className="cTtl01 cTtl01--2line">
              <p className="cTtl01__en">Client</p>
              <h3 className="cTtl01__ja">取引メーカー・取扱ブランド（一例）</h3>
            </div>
            <div className={styles.listlogo}>
              <div className={styles.item}>
                <div className={styles.inbox}>
                  <p className={styles.img}>
                    <Image
                      src="/images/import_goods/logo/logo1.svg"
                      alt="新日本カレンダー株式会社ペピイ事業部"
                      width={242}
                      height={90}
                    />
                  </p>
                  <h4 className={styles.txt}>新日本カレンダー株式会社<br />ペピイ事業部</h4>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.inbox}>
                  <p className={styles.img}>
                    <Image
                      src="/images/import_goods/logo/logo2.svg"
                      alt="株式会社スパイス"
                      width={242}
                      height={90}
                    />
                  </p>
                  <h4 className={styles.txt}>株式会社スパイス</h4>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.inbox}>
                  <p className={styles.img}>
                    <Image
                      src="/images/import_goods/logo/logo3.svg"
                      alt="株式会社ナイス企画"
                      width={242}
                      height={90}
                    />
                  </p>
                  <h4 className={styles.txt}>株式会社ナイス企画</h4>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.inbox}>
                  <p className={styles.img}>
                    <Image
                      src="/images/import_goods/logo/logo4.svg"
                      alt="株式会社フリート"
                      width={242}
                      height={90}
                    />
                  </p>
                  <h4 className={styles.txt}>株式会社フリート</h4>
                </div>
              </div>
            </div>
            <div className={styles.listtxt}>
              <div className={styles.item}>
                <h4 className={styles.txt}>有限会社JS企画</h4>
              </div>
              <div className={styles.item}>
                <h4 className={styles.txt}>株式会社中外陶園</h4>
              </div>
              <div className={styles.item}>
                <h4 className={styles.txt}>株式会社マツイ</h4>
              </div>
            </div>
            <p className={styles.txtnote}>※五十音順</p>
          </div>
        </section>

      </main>
    </>
  )
};

Importgoods.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export default Importgoods;
