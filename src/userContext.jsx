import { useState } from 'react'
import { createContext, useContext } from 'react'

export const userContext = createContext(false)

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(false)

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}
