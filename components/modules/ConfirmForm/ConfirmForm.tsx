import Image from "next/image";
import styles from "./ConfirmForm.module.scss";

function ConfirmForm(): JSX.Element {
  return (
    <>
      <form method="post" id="contactform" action="/complete" className={styles.cForm} noValidate autoComplete="off" name="contactform" >
        <div className={styles.stepForm}>
          <p className="pc">
            <Image
              src="/images/contact/step02.svg"
              alt="Step2"
              width={894}
              height={63}
            />
          </p>
          <p className="sp">
            <Image
              src="/images/contact/step02_sp.svg"
              alt="Step2"
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
                <p><span>お客様区分</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>御社名</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>担当者名</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>所属部署・役職</span></p>
              </th>
              <td>Valule1</td>
            </tr>            
            <tr>
              <th>
                <p><span>郵便番号</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>会社所在地</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>電話番号</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>メールアドレス</span></p>
              </th>
              <td>Valule1</td>
            </tr>
            <tr>
              <th>
                <p><span>お問い合わせ内容</span></p>
              </th>
              <td>Valule1</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" id="btnConfirm" className={styles.btn01Form}><span>入力内容を確認して送信</span></button>
      </form>
    </>
  );
}

export { ConfirmForm };
