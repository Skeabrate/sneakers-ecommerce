export const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_LOADING':
         return {
            ...state,
            isLoaded: action.value,
         }

      case 'SET_CURRENT':
         if(action.direcion === 'SLIDE_RIGHT'){
            if(state.current === 2){
               return {
                  ...state,
                  current: 0,
               }
            } else {
               return {
                  ...state,
                  current: state.current + 1
               }
            }
         } else if(action.direcion === 'SLIDE_LEFT'){
            if(state.current === 0){
               return {
                  ...state,
                  current: 2,
               }
            } else {
               return {
                  ...state,
                  current: state.current - 1
               }
            }
         } else {
            return {
               ...state,
               current: action.value
            }  
         }

      default:
         return state
   }
}