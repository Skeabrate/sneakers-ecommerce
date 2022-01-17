import { useContext } from "react"
import ModalsContext from "../Context/ModalsContext"

export const useInfoOpen = () => {
    const { setIsInfoOpen } = useContext(ModalsContext)

    const setOff = () =>{
        return new Promise((resolve, reject) =>{
            setIsInfoOpen((state) => ({
                ...state,
                info: false,
            }))
            resolve()
        })
    }

    const setOn = (info, success) =>{
        return new Promise((resolve, reject) =>{
            setIsInfoOpen({
                info: info,
                success: success,
            })
            resolve()
        })
    }

    const resolveInfoOpen = (info, success) => {
        setOff()
            .then(() => setOn(info, success))
    }

    return resolveInfoOpen
}