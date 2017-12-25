import React from 'react'

const Display = (props) => {
        return (
            <div>
            <p className="style">COUNTING GAME</p>
                <p>{props.count}</p>
            </div>
        );

}


export default Display;