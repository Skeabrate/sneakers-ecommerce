import validateEmail from '../../../helpers/validateEmail';

const validRulesHandler = (action, state) => {
    if(action.field === "name"){
        return state.name.value.length > 1 ? false : "" 
    }
    else if(action.field === "email"){
        return validateEmail(state.email.value) ? false : "The email address is invalid." 
    }
    else if(action.field === "message"){
        return state.name.value.length > 1 ? false : "" 
    }
    
    else return true
}

export function reducer(state, action) {
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

        case "setIsMsgFocused":
            return{
                ...state,
                [action.field]: {
                    ...state[action.field],
                    isFocused: action.value,
                }
            }

        default: 
            return state
    }
}