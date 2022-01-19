import { useContext, useState } from 'react';
import AuthContext from "../Context/AuthContext"
import { useSelector, useDispatch } from "react-redux"
import { resetCart } from '../Redux/addToCartSlice';
import { db } from "../firebase"

export const usePayment = (setSuccesful = () => {}) => {
    const [loading, setLoading] = useState(false)

    const cart = useSelector((state) => state.cart)
    const { isAuthenticated } = useContext(AuthContext)

    const dispatch = useDispatch()

    const handleEndLoading = () => {
        setLoading(false)
        dispatch(resetCart())
        setSuccesful(true)
    }

    const handlePayment = async () => {
        if(isAuthenticated) {
            setLoading(true)

            const d = new Date()
            let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            let month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1

            db.collection(isAuthenticated.token).add({
                dateId: d,
                date: `${date}.${month}.${d.getFullYear()}`,
                products : [
                    ...cart
                ]
            })
            .then(() => handleEndLoading())
            .catch((err) => {
                console.log(err.response)
                handleEndLoading()
            })
        }
        else {
            setLoading(true)
            setTimeout(() => {
                handleEndLoading()
            }, 1500)
        }
    }

    return {
        loading,
        handlePayment,
    };
};