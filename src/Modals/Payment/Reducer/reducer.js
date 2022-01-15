export function reducer(state, action) {
    switch (action.type) {
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

        default:
            return state
    }
}