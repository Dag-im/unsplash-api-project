import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('cat')
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
