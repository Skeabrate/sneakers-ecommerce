import React, { useContext, useReducer } from 'react';
import { ModalsContext } from '../../Context/ModalsContext';
import ModalTemplate from "../ModalTemplate/ModalTemplate"
import { reducer } from './Reducer/reducer';
import { initialState } from "./Reducer/initialState"
import { usePathChange } from "../../hooks/usePathChange"

const Payment = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { isPaymentOpen, setIsPaymentOpen } = useContext(ModalsContext)

    usePathChange(() => setIsPaymentOpen(false))

    const reducerActionHandler = (type, field, value) => dispatch({ type: type, field: field, value: value, })

    const loadingErrorHandler = () => isInfoOpen.info && setIsInfoOpen((state) => ({
        ...state,
        info: false,
    }))

    const handleSubmit = (e) => {
        e.preventDefault()

        let rules = state.email.isInvalid || state.password.isInvalid || !state.email.value || !state.password.value ||
        state.passwordConfirmation.isInvalid || !state.passwordConfirmation.value

        if(rules) {
            if(!state.email.value) reducerActionHandler("setIsActive", "email")
            if (!state.password.value) reducerActionHandler("setIsActive", "password")
            if (!state.passwordConfirmation.value) reducerActionHandler("setIsActive", "passwordConfirmation")
        }
        else {
            registerHandler(state.email.value, state.password.value)
        }
    }

    return (
      <ModalTemplate
        label="add payment method"
        isModalOpen={isPaymentOpen}
        setIsModalOpen={() => setIsPaymentOpen(false)}
      >
            <form onSubmit={(e) => handleSubmit(e)}>
                <CustomInput
                    name="name"
                    autoComplete="username"
                    value={state.email.value}
                    onChange={(e) => {
                        reducerActionHandler("setValue", "email", e.currentTarget.value);
                        reducerActionHandler("setIsInvalid", "email");
                    }}
                    setActiveError={() =>
                        !state.email.isActive &&
                        reducerActionHandler("setIsActive", "email")
                    }
                    activeError={state.email.isActive}
                    invalidError={state.email.isInvalid}
                    setLoadingError={loadingErrorHandler}
                    isRegister
                />

                <CustomInput
                    name="password"
                    autoComplete="current-password"
                    value={state.password.value}
                    onChange={(e) => {
                        reducerActionHandler(
                            "setValue",
                            "password",
                            e.currentTarget.value
                        );
                        reducerActionHandler("setIsInvalid", "password");
                    }}
                    setActiveError={() =>
                        !state.password.isActive &&
                        reducerActionHandler("setIsActive", "password")
                    }
                    activeError={state.password.isActive}
                    invalidError={state.password.isInvalid}
                    setLoadingError={loadingErrorHandler}
                    isRegister
                />

                <CustomInput
                    name="password confirmation"
                    autoComplete="current-password"
                    value={state.passwordConfirmation.value}
                    onChange={(e) => {
                        reducerActionHandler(
                            "setValue",
                            "passwordConfirmation",
                            e.currentTarget.value
                        );
                        reducerActionHandler("setIsInvalid", "passwordConfirmation");
                    }}
                    setActiveError={() =>
                        !state.passwordConfirmation.isActive &&
                        reducerActionHandler("setIsActive", "passwordConfirmation")
                    }
                    activeError={state.passwordConfirmation.isActive}
                    invalidError={state.passwordConfirmation.isInvalid}
                    setLoadingError={loadingErrorHandler}
                    isRegister
                />

                <LoadingButton
                    isBlack
                    disabled={isInfoOpen.info}
                    loading={loading}
                    label="Sign Up For Free"
                />
            </form>
      </ModalTemplate>
    );
};

export default Payment;