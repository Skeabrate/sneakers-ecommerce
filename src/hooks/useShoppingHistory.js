import { useState, useEffect, useCallback, useContext } from 'react';
import { db } from "../firebase"
import AuthContext from '../Context/AuthContext';

export const useShoppingHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { isAuthenticated: { token } } = useContext(AuthContext)

    const fetchProducts = useCallback(() => {
        db.collection(token)
        .orderBy("dateId", "desc")
        .onSnapshot((snapshot) => {
            setData(
                snapshot.docs.map(item => ({
                    id: item.id,
                    date: item.data().date,
                    products: item.data().products
                }))
            )
            setLoading(false) 
        })
    }, [token])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return [data, loading];
};