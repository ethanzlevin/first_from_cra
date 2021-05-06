import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from 'src/components/SearchBar/SearchBar.js'

const App = () => {
    return(
    <div>
        
        <CountButton incrementBy={1} buttonColor = {'blue'}/>
        <CountButton incrementBy={5} buttonColor ={'green'}/>
        
    </div> 
    )

} 

export default App