import { useState } from "react";
function Counter(){
    let [count,setCount] = useState(0);
    function Count(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={Count}>Increment</button>
        </div>
    )
}
export default Counter;