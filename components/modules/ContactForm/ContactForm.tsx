import { useState } from "react";
import { customers } from "./customers.js";
import Image from "next/image";
import styles from "./ContactForm.module.scss";

function ContactForm(): JSX.Element {
  const [values, setValues] = useState({
    nameuser: '',
    company: '',
    branch: '',
    zipcode: '',
    address: '',
    tel: '',
    email: '',
    content: '',
    customer: ''
  });
  const [validations, setValidations] = useState({
    nameuser: '',
    company: '',
    branch: '',
    zipcode: '',
    address: '',
    tel: '',
    email: '',
    content: '',
    customer: ''
  })
  const txtRequired = '* 必須項目です';
  const [isChedked, setIsChecked] = useState(false);
  const validateAll = () => {
    const { nameuser, company, branch, zipcode, address, tel, email, content, customer } = values
    const validations = { 
      nameuser: '', 
      company: '', 
      branch: '',
      zipcode: '',
      address: '',
      tel: '',
      email: '',
      content: '' ,
      customer: ''
    }
    let isValid = true    
    if (!nameuser) {
      validations.nameuser = txtRequired
      isValid = false
    }    
    if (!company) {
      validations.company = txtRequired
      isValid = false
    } 
    if (!branch) {
      validations.branch = txtRequired
      isValid = false
    } 
    if (!zipcode) {
      validations.zipcode = txtRequired
      isValid = false
    } 
    if (!address) {
      validations.address = txtRequired
      isValid = false
    } 
    if (!tel) {
      validations.tel = txtRequired
      isValid = false
    } 
    if (!email) {
      validations.email = txtRequired
      isValid = false
    } 
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Email format must be as example@mail.com'
      isValid = false
    }
    if (!content) {
      validations.content = txtRequired
      isValid = false
    }    
    if (!customer) {
      validations.customer = txtRequired
      isValid = false
    }    
    if (!isValid) {
      setValidations(validations)
    }
    return isValid
  }
  const validateOne = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any) => {
    const { name } = e.target as HTMLInputElement
    const value = e.currentTarget.value
    let message = ''    
    if (!value) {
     // message = `${name} ${txtRequired}`
      message = txtRequired;
    }
    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    setValidations({...validations, [name]: message })
    //console.log(values)   
  }

  const [checkedState, setCheckedState] = useState(
    new Array(customers.length).fill(false)
  );
  const handleOnChange = (position:any) => {
    let isValid = true
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    
    if( !updatedCheckedState.includes(true) ){
      isValid = false
    }
    else{
      values.customer = customers[position].value      
      isValid = false
    }

    console.log(customerVal)
    //console.log(isValid)
    return isValid
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any) => {
    const { name } = e.target as HTMLInputElement
    const value = e.currentTarget.value
    setValues({...values, [name]: value })
    //console.log(values)
    //console.log(name)
  }
  const handleSubmit = (e:any) => {
    const isValid = validateAll()    
    if (!isValid) {
      e.preventDefault();
      return false
    }
    //handleOnChange(e);
    alert(JSON.stringify(values))
  }

  const { 
    nameuser: nameVal, 
    company: companyVal,
    branch: branchVal,
    zipcode: zipcodeVal,
    address: addressVal,
    tel: telVal,
    email: emailVal,
    content: contentVal,
    customer: customerVal
  } = validations
  return (
    <>
      <form method="post" id="contactform" action="/confirm" className={styles.cForm} noValidate autoComplete="off" name="contactform"  onSubmit={handleSubmit}>
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
                <div className="fieldWrap">
                  <ul className={styles.lstCheck}>
                  {customers.map(({ custommername, value }, i) => {
                    return (
                      <li key={i}>
                        <label className={styles.checkbox} htmlFor={`custom-checkbox-${i}`}>
                          <input 
                            type="checkbox" 
                            id={`custom-checkbox-${i}`}
                            name={custommername} 
                            value={value} 
                            onChange={() => handleOnChange(i)}
                          />
                          <span>{value}</span>
                        </label>
                      </li>
                      );
                    })}
                  </ul>
                  <div className={`fieldRequired`}>{customerVal?<span>{txtRequired}</span>:``}</div>
                </div>
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
                  <div className={`fieldRequired`}>{companyVal?<span>{companyVal}</span>:``}</div>
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
                  <div className={`fieldRequired`}>{nameVal?<span>{nameVal}</span>:``}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em className="option">任意</em><span>所属部署・役職</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="text" name="branch" id="branch" className="w500" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{branchVal?<span>{branchVal}</span>:``}</div>
                </div>
              </td>
            </tr>            
            <tr>
              <th>
                <p><em className="option">任意</em><span>郵便番号</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="text" name="zipcode" id="zipcode" className="validate[custom[zipcode]] w200" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{zipcodeVal?<span>{zipcodeVal}</span>:``}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em>必須</em><span>会社所在地</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="text" name="address" id="address" className="validate[required]" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{addressVal?<span>{addressVal}</span>:``}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em>必須</em><span>電話番号</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="tel" name="tel" id="tel" className="validate[required,custom[phone]] w500"
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{telVal?<span>{telVal}</span>:``}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em>必須</em><span>メールアドレス</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <input type="email" name="email" id="email" className="validate[required,custom[email]] w500" 
                  onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{emailVal?<span>{emailVal}</span>:``}</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p><em>必須</em><span>お問い合わせ内容</span></p>
              </th>
              <td>
                <div className="fieldWrap">
                  <textarea name="content" id="content" className="validate[required]" onChange={handleChange}
                  onBlur={validateOne} />
                  <div className={`fieldRequired`}>{contentVal?<span>{contentVal}</span>:``}</div>
                </div>
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
