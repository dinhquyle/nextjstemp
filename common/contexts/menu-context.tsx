import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

type TMenu = {
  isOpen: boolean,
  setIsOpen: (isOpen:boolean) => void
}

export const MenuContext = createContext<TMenu | null>(null)

export const MenuProvider = ({ children }: {children:React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <div>
      <MenuContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </MenuContext.Provider>
    </div>
  )
}