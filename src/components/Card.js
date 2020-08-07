import React from 'react';
import PropTypes from 'prop-types'

const Card = ({ user }) => {
    return (
        <div className="card mb-4 mr-1 col-5">
            <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Company: {user.company.name}</p>
                <p className="card-text">Business: {user.company.bs}</p>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    user: PropTypes.object
}