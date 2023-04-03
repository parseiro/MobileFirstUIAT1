import React from "react";

export const Card = (props)=> {
    const {children, titulo} = props;

    return (
        <div>
            <h5>{titulo}</h5>
            {children}
        </div>
    );
};

Card.propTypes = { };

export default React.memo(Card);
