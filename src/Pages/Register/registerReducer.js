import validateEmail from '../../helpers/validateEmail';

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
         let valid = false
         if(action.field === "email"){
            valid = validateEmail(state.email.value) ? false : "The email address is invalid." 
         } 
         else if(action.field === "password"){
            valid = state.password.value.length > 5 ? false : "The password should be at least 6 characters."
         }

         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               isInvalid: valid,
            }
         }

      default: 
         return state
   }
}