import React from 'react';

const NumCard = ({innerValue}) => {

    const styles = {
        fontSize: "128px"
    };

    return (
        <div className="col col-1" style={styles}>
            <div className="card text-white bg-dark border border-secondary border-3 position-absolute">
                <div className="card-body text-center">{innerValue}</div>
            </div>
        </div>
    );
};

export default NumCard;