import React, { useState } from "react"
/* 

    function useState(initalValue){
    
        // codes ...

        return [ initalValue, mutatorFunction ]
    }

*/

function Counter() {
    console.log("re-render")

    let countValue = 100
    
    const [state, setState] = useState(100)

    function increment() {
        console.log("increment")
        countValue++
        console.log({ countValue })

        // state++ // cant change state variable directly.
        setState(state + 1)

        console.log(state)
    }

    return (
        <div>
            <h1>Count:{countValue}</h1>
            <h1>state:{state}</h1>

            {/* <button onClick="increment()">increment</button> */}
            {/* <button onClick={increment()}>increment</button> */}

            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter

export const BigCounter = "Big Counter"
export const SmallCounter = "Small Counter"
