import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import styles from "@/styles/page-styles/Importbusiness.module.scss";

// types
import { TNextPageWithLayout } from "@/common/types";

const Importbusiness: TNextPageWithLayout = (): JSX.Element => {
  useEffect(() => {
    const body = document.querySelector(`body`);

    if (body != null) {
      body.classList.add(styles.import_business);
    }

    return;
  }, []);

  return (
    <>
      <Head>
        <title>Import Business</title>
        <meta httpEquiv="expires" content="86400" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Import Business" />        
      </Head>
      <main id="wrap">
        <div className={`${styles.cMvImport} cMv`}>
          <div className="cMv__ttl">
            <p className="cMv__ttlen">Import Business</p>
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

        <section className={styles.sectionmade}>
          <div className="container w1120">
            <div className={styles.itembox1}>
              <div className={styles.imgbox}>
                <h3 className={styles.ttl}>海外の安価で優れた製品を日本に供給する<br className="pc" />ためにあらゆる貿易業務を代行します</h3>
                <div className={styles.img}>
                  <p className="pc">
                    <Image
                      src="/images/import_business/img1.jpg"
                      alt=""
                      width={540}
                      height={251}
                    />
                  </p>
                  <p className="sp">
                    <Image
                      src="/images/import_business/img1-sp.jpg"
                      alt=""
                      width={325}
                      height={220}
                    />
                  </p>
                </div>
              </div>
              <div className={styles.txtbox}>
                中国やアジア諸国などにおける、近年のものづくり技術の進歩は凄まじく、市場には低コスト・高パフォーマンスの海外製品が溢れています。特に、ここ最近の日本市場においては、Made in Japanへのこだわりは薄れつつあり、グローバル化とともに海外の商品を安心して受け入れる文化が醸成され、日本の国内消費における輸入商品の比率が年々高まっています。<br />
                一方、貿易取引は言語や商慣習などが大きく異なる国・企業間でのコミュニケーションや、書類作成等の煩雑な業務などが必要となるほか、様々な課題とリスクを孕むため、貿易経験とノウハウの少ない企業が容易に参入できる市場ではありません。<br />
                井元産業では、これらの課題やリスクを一手に引き受け、長年の経験で培った豊富なネットワークと信頼、実績により、輸出入ともにメリットのある取引を実現します。
              </div>
            </div>
            <div className={styles.itembox2}>
              <div className={styles.inbox}>
                <h4 className={styles.ttlsub}>貿易事業にまつわる<br className="sp" />このような課題はありませんか？</h4>
                <ul className={styles.list}>
                  <li>
                    <div className={styles.item}><span>海外メーカーを探したい</span></div>
                  </li>
                  <li>
                    <div className={styles.item}><span>貿易の経験やノウハウがない</span></div>
                  </li>
                  <li>
                    <div className={styles.item}><span>手間とコストを削減したい</span></div>
                  </li>
                  <li>
                    <div className={styles.item}><span>メーカーとスムーズに取引したい</span></div>
                  </li>
                  <li>
                    <div className={styles.item}><span>複数メーカーとの取引をまとめたい</span></div>
                  </li>
                  <li>
                    <div className={styles.item}><span>海外の展示会に同行してほしい</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionmerit}>
          <div className="cTtl01 cTtl01--2line cTtl01--center">
            <p className="cTtl01__en">Merit</p>
            <h3 className="cTtl01__ja">日本バイヤーに提供することができる<br className="sp" />4つのメリット</h3>
          </div>
          <div className={styles.itembox1}>
            <div className="container w1120">
              <div className={styles.box1}>
                <p className={`${styles.icon} ${styles.en}`}>01</p>
                <div className={styles.inbox}>
                  <div className={styles.txtbox}>
                    <h4 className={styles.cttl}>豊富な貿易実績から<br className="sp" />不安のないスムーズな<br />貿易取引を実現します</h4>
                    <p className={`${styles.img} sp`}>
                      <Image
                        src="/images/import_business/img2-sp.jpg"
                        alt="豊富な貿易実績から不安のないスムーズな貿易取引を実現します"
                        width={325}
                        height={220}
                      />
                    </p>
                    <div className={styles.txt}>
                      弊社は、創業から120年以上に渡って貿易事業に携わっており、日本国内のバイヤーと多数の取引実績があるため、海外諸国のルールに基づいた適切な輸入を行うことが可能です。<br />また、豊富な貿易経験から、メーカーとの仲介や双方の煩雑な業務の代行などを請け負うことで、スムーズで不安のない貿易取引を実現します。
                    </div>
                  </div>
                  <p className={`${styles.img} pc`}>
                    <Image
                      src="/images/import_business/img2.jpg"
                      alt="豊富な貿易実績から不安のないスムーズな貿易取引を実現します"
                      width={380}
                      height={263}
                    />
                  </p>
                </div>
              </div>
              <div className={styles.box2}>
                <div className={styles.imgbox}>
                  <div className={styles.img}>
                    <p className={`${styles.img} pc`}>
                      <Image
                        src="/images/import_business/img3.jpg"
                        alt="海外メーカーや海外の展示会に同行します"
                        width={280}
                        height={220}
                      />
                    </p>
                    <p className={`${styles.img} sp`}>
                      <Image
                        src="/images/import_business/img3-sp.jpg"
                        alt="海外メーカーや海外の展示会に同行します"
                        width={160}
                        height={120}
                      />
                    </p>
                  </div>
                  <h5 className={`${styles.ttlsub} sp`}>海外メーカーや<br />海外の展示会に<br />同行します</h5>
                </div>
                <div className={styles.txt}>
                  <h5 className={`${styles.ttlsub} pc`}>海外メーカーや海外の展示会に同行します</h5>
                  弊社スタッフがお客様に同行し、海外メーカーや海外開催の展示会に訪問します。現場で直接商品の選定を行ったり、メーカーの担当者に質問することで、迅速かつ安全性の高い取引を行うことが可能です。
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itembox2}>
            <div className="container w1120">
              <div className={styles.box1}>
                <div className={`${styles.img} pc`}>
                  <Image
                    src="/images/import_business/img4.jpg"
                    alt="専門的な知識・スキルを有したスタッフが貿易事業を支援します"
                    width={380}
                    height={323}
                  />
                </div>
                <div className={styles.txtbox}>
                  <p className={`${styles.icon} ${styles.en}`}>02</p>
                  <h4 className={styles.cttl}>専門的な知識・スキルを有した<br className="sp" />スタッフが<br className="pc" />チームとなって<br className="sp" />貿易事業を支援します</h4>
                  <div className={`${styles.img} sp`}>
                    <Image
                      src="/images/import_business/img4-sp.jpg"
                      alt="専門的な知識・スキルを有したスタッフが貿易事業を支援します"
                      width={325}
                      height={220}
                    />
                  </div>
                  <div className={styles.txt}>
                    海外市場や日本市場に精通した営業担当が、海外製品の最新情報や日本のニーズが高い商品の情報をもとに、お客様の事業について助言や提案を行います。また、弊社には、英語や中国語などの語学が堪能な営業担当が多数在籍しているため、海外メーカーとの円滑なコミュニケーションにより安全かつ適切な取引を行うことが可能です。<br />
                    これらの営業担当に加え、管理・サポート担当や通関業務担当などの専門的な知識・スキルを有したスタッフが専属のチームとなり、お客様の貿易事業を総合的に支援します。
                  </div>
                </div>
              </div>
              <div className={styles.box2}>
                <h5 className={styles.ttlsub}>輸入業務に関わるスタッフ一覧</h5>
                <table>
                  <tbody>
                    <tr>
                      <th>営業担当</th>
                      <td>お客様専任の営業担当者として、商品や貿易プランのご提案から、メーカーとの商談の仲介、納品までの業務を窓口となって担当します。</td>
                    </tr>
                    <tr>
                      <th><span>海外営業担当</span></th>
                      <td>外国人スタッフや外国語の堪能なスタッフが、諸外国の文化や商慣習等を踏まえて商談・取引を行うことで、トラブルの防止やリスクマネジメントにつなげます。</td>
                    </tr>
                    <tr>
                      <th><span>管理・<br className="sp" />サポート担当</span></th>
                      <td>輸送機関や配送業者などの輸入業務に携わる機関・企業との連携や工程管理など、スムーズな手続きの進捗をサポートします。</td>
                    </tr>
                    <tr>
                      <th><span>通関業務担当</span></th>
                      <td>通関書類の作成や通関手続き、法令・規制に基づいた商品のチェックなど、安全かつ円滑な通関を実現します。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={`${styles.itembox1} ${styles.itembox3}`}>
            <div className="container w1120">
              <div className={styles.box1}>
                <p className={`${styles.icon} ${styles.en}`}>03</p>
                <div className={styles.inbox}>
                  <div className={styles.txtbox}>
                    <h4 className={styles.cttl}>海外メーカーの<br className="sp" />幅広いネットワークから<br />価値ある商品を提案します</h4>
                    <p className={`${styles.img} sp`}>
                      <Image
                        src="/images/import_business/img5-sp.jpg"
                        alt="日本メーカーの幅広いネットワークから価値ある商品を提案します"
                        width={325}
                        height={220}
                      />
                    </p>
                    <div className={styles.txt}>
                      弊社は、様々な業種の優良企業との取引があるため、豊富で高品質な商品ラインナップからお客様が希望する商品や最適な商品を提案することが可能です。<br />また、メーカーと独占契約を結んだ商品や一般的な貿易では取引が困難な商品など、付加価値の高い商品を提供することで、お客様の営業力強化を実現します。
                    </div>
                  </div>
                  <p className={`${styles.img} pc`}>
                    <Image
                      src="/images/import_business/img5.jpg"
                      alt="日本メーカーの幅広いネットワークから価値ある商品を提案します"
                      width={380}
                      height={233}
                    />
                  </p>
                </div>
              </div>
              <div className={styles.box2}>
                <div className={styles.imgbox}>
                  <div className={styles.img}>
                    <p className="pc">
                      <Image
                        src="/images/import_business/img6.jpg"
                        alt="お客様のオリジナル商品を制作することも可能です"
                        width={280}
                        height={200}
                      />
                    </p>
                    <p className="sp">
                      <Image
                        src="/images/import_business/img6-sp.jpg"
                        alt="お客様のオリジナル商品を制作することも可能です"
                        width={160}
                        height={120}
                      />
                    </p>
                  </div>
                  <h5 className={`${styles.ttlsub} sp`}>お客様の<br />オリジナル商品を<br />制作することも<br />可能です</h5>
                </div>
                <div className={styles.txt}>
                  <h5 className={`${styles.ttlsub} pc`}>お客様のオリジナル商品を制作することも可能です</h5>
                  既成品の取り扱いだけでなく、お客様のオリジナル商品を制作することが可能です。既成品への名入れ・絵付けだけなく、企画段階から携わる商品開発など、信頼性の高い海外メーカーと連携してお客様の細かな要望を実現します。
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.itembox2} ${styles.itembox4}`}>
            <div className="container w1120">
              <div className={styles.box1}>
                <div className={`${styles.img} pc`}>
                  <Image
                    src="/images/import_business/img7.jpg"
                    alt=""
                    width={380}
                    height={263}
                  />
                </div>
                <div className={styles.txtbox}>
                  <p className={`${styles.icon} ${styles.en}`}>04</p>
                  <h4 className={styles.cttl}>輸入貨物到着後の申請から<br className="sp" />納品まで<br className="pc" />徹底して<br className="sp" />サポートします</h4>
                  <div className={`${styles.img} sp`}>
                    <Image
                      src="/images/import_business/img7-sp.jpg"
                      alt=""
                      width={325}
                      height={325}
                    />
                  </div>
                  <div className={styles.txt}>
                    弊社は、貨物到着後の輸入申告からお客様の拠点への配送・納品までのワンストップサービスを提供しています。<br />輸入・配送に関する長年の経験から、輸入申告書や船荷証券などの必要書類の作成や輸入通関手続き、配送手段や配送ルートの選定などを最適化し、お客様の業務効率化や迅速な事業展開を支援します。
                  </div>
                </div>
              </div>
              <div className={styles.box2}>
                <p className="pc">
                  <Image
                    src="/images/import_business/img-step.png"
                    alt=""
                    width={1000}
                    height={131}
                  />
                </p>
                <p className="sp">
                  <Image
                    src="/images/import_business/img-step-sp.png"
                    alt="お客様のオリジナル商品を制作することも可能です"
                    width={287}
                    height={194}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
};

Importbusiness.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};
export default Importbusiness;
