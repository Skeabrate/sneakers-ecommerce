import React from "react"

const ModalsContext = React.createContext({
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

export default ModalsContext