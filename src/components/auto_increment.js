import React from 'react'
const AutoIncrement=(props)=>{
    return(
        <div>
            <button className=" color1 size" onClick={props.setIncrementInterval}>Auto+</button>
        </div>

    );
}



export default AutoIncrement;