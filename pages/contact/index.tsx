import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
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
              <p>食器やキッチン用品、刃物、農具・工具、雑貨などの輸出・輸入事業に関するお問い合わせについては、<br className="pc" />お電話またはメールフォームよりご連絡ください。</p>
            </div>
            <div className={styles.note01Form}>
              <p>個人への小売・販売は行っておりませんので、お問い合せにはお答えいたしかねます。</p>
            </div>
            <div className="cTtl01 cTtl01--2line cTtl01--center">
              <p className="cTtl01__en">Mail Form</p>
              <h3 className="cTtl01__ja">メールフォームからのお問い合わせ</h3>
            </div>
            <div className={styles.txt02Form}>
              <p>プライバシーポリシーをご一読いただき、同意の上で以下のフォームより必要事項を入力・送信ください。<br />なお、回答に数日程度要する場合があるため、お急ぎのご用件はお電話にてお問い合わせください。</p>
            </div>
            <form method="post" id="contactform" action="./confirm" name="contactform">
              <div className={styles.stepForm}>
                <p className="pc">
                  <Image
                    src="/images/contact/step01.svg"
                    alt=""
                    width={894}
                    height={63}
                  />
                </p>
                <p className="sp">
                  <Image
                    src="/images/contact/step01_sp.svg"
                    alt=""
                    width={325}
                    height={63}
                  />
                </p>
              </div>
              <p className="hid_url">Leave this empty: <input type="text" name="url" /></p>
              <table className={styles.tableForm}>
                <tbody>
                  <tr>
                    <th className={styles.pt01Pc}>
                      <p><em>必須</em><span>お客様区分</span></p>
                    </th>
                    <td>
                      <ul className={styles.lstCheck}>
                        <li>
                          <label className={styles.checkbox}>
                            <input type="checkbox" name="customer[]" value="メーカー" className="validate[required]" />
                            <span>メーカー</span>
                          </label>
                        </li>
                        <li>
                          <label className={styles.checkbox}>
                            <input type="checkbox" name="customer[]" value="卸売業・商社" className="validate[required]" />
                            <span>卸売業・商社</span>
                          </label>
                        </li>
                        <li>
                          <label className={styles.checkbox}>
                            <input type="checkbox" name="customer[]" value="小売店" className="validate[required]" />
                            <span>小売店</span>
                          </label>
                        </li>
                        <li>
                          <label className={styles.checkbox}>
                            <input type="checkbox" name="customer[]" value="ネット販売業者" className="validate[required]" />
                            <span>ネット販売業者</span>
                          </label>
                        </li>
                        <li>
                          <label className={styles.checkbox}>
                            <input type="checkbox" name="customer[]" value="その他" className="validate[required]" />
                            <span>その他</span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>御社名</span></p>
                    </th>
                    <td>
                      <input type="text" name="company" id="company" className="validate[required] w500" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em className="option">任意</em><span>所属部署・役職</span></p>
                    </th>
                    <td>
                      <input type="text" name="branch" id="branch" className="w500" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>担当者名</span></p>
                    </th>
                    <td>
                      <input type="text" name="nameuser" id="nameuser" className="validate[required] w500" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em className="option">任意</em><span>郵便番号</span></p>
                    </th>
                    <td>
                      <input type="text" name="zipcode" id="zipcode" className="validate[custom[zipcode]] w200" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>会社所在地</span></p>
                    </th>
                    <td>
                      <input type="text" name="address01" id="address01" className="validate[required]" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>電話番号</span></p>
                    </th>
                    <td>
                      <input type="tel" name="tel" id="tel" className="validate[required,custom[phone]] w500" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>メールアドレス</span></p>
                    </th>
                    <td>
                      <input type="email" name="email" id="email" className="validate[required,custom[email]] w500" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p><em>必須</em><span>お問い合わせ内容</span></p>
                    </th>
                    <td>
                      <textarea name="content" id="content" className="validate[required]"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button id="btnConfirm" className={styles.btn01Form}><span>入力内容を確認して送信</span></button>
              <input type="hidden" name="actionFlag" value="confirm" />
            </form>
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
