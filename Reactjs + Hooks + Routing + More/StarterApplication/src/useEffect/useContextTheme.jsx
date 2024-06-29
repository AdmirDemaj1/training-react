import { useState, createContext, useContext } from "react"

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
// Te gjitha ose me sakt states deh funksione te cilat i kaloni me ane te prop drilling
// eshte e mira ti vendosni brenda Providerit.
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  

   return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
   )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}