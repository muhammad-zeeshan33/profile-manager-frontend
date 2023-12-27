import React from 'react';

const BasicCard = ({ title, content }) => {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content-between">                
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
};

export default BasicCard;
