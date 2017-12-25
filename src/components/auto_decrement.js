import React from 'react'
const AutoDecrement=(props)=>{
    return(
        <div>
            <button className="color1 size " onClick={props.setDecrementInterval}>Auto-</button>
        </div>

    );
}



export default AutoDecrement;