import React, { useContext, useReducer, useState } from 'react';
import ModalsContext from '../../Context/ModalsContext';
import ModalTemplate from "../ModalTemplate/ModalTemplate"
import { reducer } from './Reducer/reducer';
import { initialState } from "./Reducer/initialState"
import { usePathChange } from "../../hooks/usePathChange"
import CustomInput from "../../Components/CustomInput/CustomInput"
import LoadingButton from "../../Components/LoadingButton/LoadingButton"
import {
    StyledCardInfo,
} from "./Payment.styles"
import { usePayment } from '../../hooks/usePayment';
import SuccesfulPayment from "./SuccesfulPayment/SuccesfulPayment"

const Payment = () => {
    const [succesful, setSuccesful] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    const { isPaymentOpen, setIsPaymentOpen } = useContext(ModalsContext)

    usePathChange(() => setIsPaymentOpen(false))
    const {paymentId, loading, handlePayment} = usePayment(setSuccesful)

    const reducerActionHandler = (type, field, value) => dispatch({ type: type, field: field, value: value, })

    const handleSubmit = (e) => {
        e.preventDefault()
        let rules =  !state.name.value || !state.card.value || !state.expiration.value || !state.code.value

        if(rules) {
            if(!state.name.value) reducerActionHandler("setIsActive", "name")
            if (!state.card.value) reducerActionHandler("setIsActive", "card")
            if (!state.expiration.value) reducerActionHandler("setIsActive", "expiration")
            if (!state.code.value) reducerActionHandler("setIsActive", "code")
        }
        else handlePayment()
    }

    return (
        <ModalTemplate
            label={!succesful && `add payment method`}
            isModalOpen={isPaymentOpen}
            setIsModalOpen={() => setIsPaymentOpen(false)}
        >
            {succesful ? <SuccesfulPayment id={paymentId} /> : (
                <form onSubmit={(e) => handleSubmit(e)}>
                <CustomInput
                    name="name"
                    maxLength="50"
                    value={state.name.value}
                    onChange={(e) => reducerActionHandler("setValue", "name", e.currentTarget.value)}
                    setActiveError={() => !state.name.isActive && reducerActionHandler("setIsActive", "name")}   
                    activeError={state.name.isActive}
                    isRegister
                />

                <CustomInput
                    name="card number"
                    value={state.card.value}
                    type="tel"
                    pattern="[\d| ]{16,22}"
                    onChange={(e) => reducerActionHandler("setValue", "card", e.currentTarget.value)}
                    setActiveError={() => !state.card.isActive && reducerActionHandler("setIsActive", "card")}
                    activeError={state.card.isActive}
                    isRegister
                />

                <StyledCardInfo>
                    <CustomInput
                        name="expiration (mm/yy)"
                        value={state.expiration.value}
                        type="text"
                        pattern="\d\d/\d\d"
                        onChange={(e) => reducerActionHandler("setValue", "expiration", e.currentTarget.value)}
                        setActiveError={() => !state.expiration.isActive && reducerActionHandler("setIsActive", "expiration")}
                        activeError={state.expiration.isActive}
                        isRegister
                    />

                    <CustomInput
                        name="security code"
                        value={state.code.value}
                        type="text"
                        pattern="\d{3,4}"
                        onChange={(e) => reducerActionHandler("setValue", "code", e.currentTarget.value)}
                        setActiveError={() => !state.code.isActive && reducerActionHandler("setIsActive", "code")}
                        activeError={state.code.isActive}
                        isRegister
                    />
                </StyledCardInfo>

                <LoadingButton
                    isBlack
                    /* disabled={isInfoOpen.info} */
                    loading={loading}
                    label="Pay Now"
                />
            </form>
            )}
            
        </ModalTemplate>
    );
};

export default Payment;