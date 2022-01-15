import React from "react"

export const ModalsContext = React.createContext({
   isRegisterOpen: false,
   setIsRegisterOpen: () => {},

   isPaymentOpen: false,
   setIsPaymentOpen: () => {},

   isInfoOpen: {
      info: false,
      success: false,
   },
   setIsInfoOpen: () => {},
})