import React, { useState } from 'react'

function CountButton(){

    const [currentCount, setCurrentCount] = useState(0)

    function handleClick() {
        setCurrentCount(currentCount + 1)
        
    }



    return( 
    <div>
        <button onClick = {handleClick}// close button function
        >
            +1
        </button>
        <div>{currentCount}</div>
    </div>)
}

export default CountButton