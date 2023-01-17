import React, { useState, createContext } from 'react'

type TContact = {
  nameuser: '';
  company: '';
  branch: '';
  zipcode: '';
  address: '';
  tel: '';
  email: '';
  content: '';
  customer: '';
};
export const ContactContext = createContext({});

export const ContactProvider = ({ children }: {children:React.ReactNode}) => {
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
  return (
    <ContactContext.Provider value={{ values, setValues }}>
      {children}
    </ContactContext.Provider>
  );
};
