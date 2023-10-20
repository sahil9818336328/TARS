/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { checkDefaultTheme } from './App'

const globalContext = createContext('')

const AppProvider = ({ children }) => {
  const Provider = globalContext.Provider
  const [query, setQuery] = useState('')
  const [searchSuggestions, setSearchSuggestions] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  return (
    <Provider
      value={{
        query,
        setQuery,
        searchOpen,
        isDarkTheme,
        setSearchOpen,
        toggleDarkTheme,
        searchSuggestions,
        setSearchSuggestions,
      }}
    >
      {children}
    </Provider>
  )
}

export { AppProvider, globalContext }
