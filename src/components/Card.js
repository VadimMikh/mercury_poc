import React from 'react';

const Card = ({ card }) => {
    return (
        <div className="card mb-4 mx-2" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{card.currency}</h5>
                <p className="card-text">{parseFloat(card.rate, 10).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Card;
