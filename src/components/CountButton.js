import React, { useState } from 'react'

function CountButton(props ){


    const [currentCount, setCurrentCount] = useState(0)

    function handleClick() {
        setCurrentCount(currentCount + props.incrementBy)
        
    }

const buttonStyles = { 
background: props.buttonColor,
borderRadius: "10px"
}




    return( 
    <div>
        <button style= {buttonStyles} onClick = {handleClick}// close button function
        >
            +{props.incrementBy}
        </button>
        <div>{currentCount}</div>
    </div>)
}

export default CountButton