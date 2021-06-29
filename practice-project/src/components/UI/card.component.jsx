import React from 'react';

import './card.styles.css';

const Card = ({children}) => {
    return (
        <div className={`card input`}>
            {children}
        </div>
    );
};

export default Card;