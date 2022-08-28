import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectionContext = React.createContext(null) as any

interface SelectionProviderProps {
  children: React.ReactNode
}
const SelectionProvider = ({ children }: SelectionProviderProps) => {
  const [person, setPerson] = React.useState([])

  return (
    <selectionContext.Provider value={[person, setPerson]}>
      {children}
    </selectionContext.Provider>
  )
}

export default SelectionProvider
