import { useContext, useState } from 'react';
import AuthContext from "../Context/AuthContext"
import { useSelector, useDispatch } from "react-redux"
import { resetCart } from '../Redux/addToCartSlice';
import { v4 as uuid } from "uuid"

export const usePayment = (setSuccesful = () => {}) => {
    const [paymentId, setPaymentId] = useState(0)
    const [loading, setLoading] = useState(false)

    const cart = useSelector((state) => state.cart)
    const { isAuthenticated } = useContext(AuthContext)

    const dispatch = useDispatch()

    const handlePayment = async () => {
        const id = uuid()
        setPaymentId(id)

        if(isAuthenticated) {
            try{
                const res = await axios.post(`https://sneakers-b80b7-default-rtdb.firebaseio.com`, {
                    test: 'test'
                })
                console.log(res)
            } catch(ex) {
                console.log(ex.response)
            }

            dispatch(resetCart())
            setSuccesful(true)
        }
        else {
            setLoading(true)
            setTimeout(() => {
                dispatch(resetCart())
                setSuccesful(true)
                setLoading(false)
            }, 1500)
        }
    }

    return {
        paymentId,
        loading,
        handlePayment,
    };
};