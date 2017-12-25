import React from 'react'
const Increment=(props)=>{
    return(
        <div>
            <button className="size color2 " onClick={props.onIncrement}>+</button>
        </div>

    )
};



export default Increment;