import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const LoadingScreen = ({ style }) => {
    return <div style={style}><ClipLoader color={'#fe7901'} /></div>
}

export default LoadingScreen;