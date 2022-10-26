import React from 'react';

const FACard = ({innerValue}) => {

    const styles = {
        fontSize: "128px"
    };

    return (
        <div className="col col-2" style={styles}>
            <div className="card text-white bg-dark border border-secondary border-3">
                <div className="card-body text-center">{innerValue}</div>
            </div>
        </div>
    );
};

export default FACard;