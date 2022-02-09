import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title }) => {
    return (
        <ReactHelmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </ReactHelmet>
    );
};

export default Helmet;