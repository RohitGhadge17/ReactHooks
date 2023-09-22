import React, { useState } from 'react'

const StateTutorial = () => {
    // const [counter,setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1)
    // }
    const [inputValue,setInputValue] = useState("Rohit")

    const onChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        {/* {counter}
        <button onClick={increment}>Increment</button> */}
        <input type="text" placeholder='enter something'  onChange={onChange} />
        {inputValue}
    </div>
  )
}

export default StateTutorial