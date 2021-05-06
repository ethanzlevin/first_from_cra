import React, { useState } from 'react'
import './CountButton.css'

function CountButton(props ){


    const [currentCount, setCurrentCount] = useState(0)

    function handleClick() {
        setCurrentCount(currentCount + props.incrementBy)
        
    }

const buttonStyles = { 
background: props.buttonColor,

}
    return( 
    <div>
        <button style= {buttonStyles} onClick = {handleClick}// close button function
        >
            +{props.incrementBy}
        </button>
        <div className={"count-display"}>{currentCount}</div>
    </div>)
}

export default CountButton