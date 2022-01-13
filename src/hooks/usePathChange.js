import { useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export const usePathChange = (closeModal = () => {}) => {
    const location = useLocation()
    const currPath = useRef(location.pathname)

    useEffect(() => {
        if(location.pathname !== currPath.current) closeModal()
    }, [location.pathname])

    return null;
};