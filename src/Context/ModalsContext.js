import React from "react"

export const ModalsContext = React.createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   isRegisterOpen: false,
   setIsRegisterOpen: () => {},
})