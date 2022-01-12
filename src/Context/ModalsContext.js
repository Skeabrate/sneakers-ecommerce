import React from "react"

export const ModalsContext = React.createContext({
   isRegisterOpen: false,
   setIsRegisterOpen: () => {},

   isInfoOpen: {
      info: false,
      success: false,
   },
   setIsInfoOpen: () => {},
})