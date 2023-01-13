import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss";
import stylesCom from "@/styles/page-styles/Contact.module.scss";

function ContactForm(): JSX.Element {
  const [values, setValues] = useState({
    nameuser: '',
    company: '',
  });
  const [validations, setValidations] = useState({
    nameuser: '',
    company: '',
  })
  const [isError, setError] = useState('')
  const txtRequired = '* 必須項目です';
  const clsError = 'isError';
  const validateAll = () => {
    const { nameuser, company } = values
    const validations = { nameuser: '', company: '' }
    let isValid = true    
    if (!nameuser) {
      validations.nameuser = txtRequired
      isValid = false
    }    
    if (!company) {
      validations.company = txtRequired
      isValid = false
    }    
    if (!isValid) {
      setValidations(validations)
      setError(clsError)
    }    
    else{
      setError('')
    }
    return isValid
  }
  const validateOne = (e: React.FormEvent<HTMLInputElement>) => {
    const { name } = e.target as HTMLInputElement
    const value = e.currentTarget.value
    let message = ''    
    if (!value) {
     // message = `${name} ${txtRequired}`
      message = txtRequired;
      setError(clsError)
    }
    else{
      setError('')
    }
    setValidations({...validations, [name]: message })
    console.log(values)
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name } = e.target as HTMLInputElement
    const value = e.currentTarget.value
    setValues({...values, [name]: value })
    //console.log(values)
    //console.log(name)
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const isValid = validateAll()    
    if (!isValid) {
      return false
    }
    alert(JSON.stringify(values))
  }

  const { 
    nameuser: nameVal, 
    company: companyVal,
  } = validations
  return (
    <>
      <form method="post" id="contactform" className={styles.cForm} noValidate autoComplete="off" name="contactform"  onSubmit={handleSubmit}>
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
                      <input type="checkbox" name="customer[]" value="テキストテキスト" className="validate[required]" />
                      <span>テキスト</span>
                    </label>
                  </li>
                  <li>
                    <label className={styles.checkbox}>
                      <input type="checkbox" name="customer[]" value="テキストテキスト" className="validate[required]" />
                      <span>テキストテキスト</span>
                    </label>
                  </li>
                  <li>
                    <label className={styles.checkbox}>
                      <input type="checkbox" name="customer[]" value="テキストテキスト" className="validate[required]" />
                      <span>テキスト</span>
                    </label>
                  </li>
                  <li>
                    <label className={styles.checkbox}>
                      <input type="checkbox" name="customer[]" value="テキストテキスト" className="validate[required]" />
                      <span>テキストテキスト</span>
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
                <div className="fieldWrap">
                  <input type="text" name="company" id="company" className="validate[required] w500" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired ${isError}`}>{companyVal}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em>必須</em><span>担当者名</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="text" name="nameuser" id="nameuser" className="validate[required] w500" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired ${isError}`}>{nameVal}</div>
                </div>
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
        <button type="submit" id="btnConfirm" className={styles.btn01Form}><span>入力内容を確認して送信</span></button>
      </form>
    </>
  );
}

export { ContactForm };
