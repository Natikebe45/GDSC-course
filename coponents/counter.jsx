import { useState } from "react";

export default function Counter() {
    const [count, setcount] = useState(0)
    
    const Increment = () => {
        setcount((prevCount) => prevCount + 1)
    }
    const decrement = () => {
        setcount((prevCount) => prevCount - 1)
    }
    const Reset = () => {
        setcount(0)
    }
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={Increment}>+</button>
            <button onClick={decrement} disabled={count == 0}>-</button>
            <button onClick={Reset} >reset</button>
        </div>

    )
}