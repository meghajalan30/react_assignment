import React from 'react'

const Decrement = (props) => {
    return (
        <div>
            <button className=" size color2" onClick={props.onDecrement}>-</button>
        </div>

    )
};


export default Decrement;