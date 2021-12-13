import React from "react"

export const OpenCartContext = React.createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
})