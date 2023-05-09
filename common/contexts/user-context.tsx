import React, { createContext } from 'react';

export const UserContext = createContext({}); 
//export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export const UserProvider = ({ children }: {children:React.ReactNode}) => {
  const user = { name: 'Ustat', age: 24 };
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
