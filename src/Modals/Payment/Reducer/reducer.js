import { 
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from "../../../helpers/paymentUtils"

const validate = (val, field) => {
    switch (field) {
        case "card" :
            return formatCreditCardNumber(val)

        case "expiration" :
            return formatExpirationDate(val)

        case "code" :
            return formatCVC(val)

        default: 
            return val
    }
}

export function reducer(state, action) {
    switch (action.type) {
        case "setValue":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: validate(action.value, action.field),
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

        default:
            return state
    }
}