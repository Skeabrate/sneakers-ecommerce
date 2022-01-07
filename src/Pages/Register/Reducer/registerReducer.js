import validateEmail from '../../../helpers/validateEmail';

const validRulesHandler = (action, state) => {
   if(action.field === "email"){
      return validateEmail(state.email.value) ? false : "The email address is invalid." 
   } 

   else if(action.field === "password"){
      return state.password.value.length > 5 ? false : "The password should be at least 6 characters."
   }

   else if(action.field === "passwordConfirmation"){
      return state.passwordConfirmation.value === state.password.value ? false : "Incorrect password."
   }

   else return true
}

export function registerReducer(state, action) {
   switch (action.type){
      case "setValue": 
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               value: action.value,
            }
         }

      case "setIsActive":
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               isActive: true,
            }
         }

      case "setIsInvalid":
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               isInvalid: validRulesHandler(action, state),
            }
         }

      default: 
         return state
   }
}