import React, { useState } from "react";
function Counter() {
const [state, setState] = useState(0);
const [state, setData] = useState("");
const [state, setGender] = useState("");



let increase = () => setState(state + 1);
let decrease = () => setState(state - 1);
let reset = () => setState(0);


return(
<div>
    <h1> My curret state is {state}</h1>
    <h1> You have entered {data}</h1>

    <input type="text" onChange={handleChange} />
        <select onchange = {(e) => setGender(e.target.value)}>
            <option value=""> "Select your gender"</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    <button onClick = {increase} > Increase </button>
    <button onClick = {decrease} > Decrease </button>
    <button onClick = {reset} > Reset </button>
        

</div>
);
}

export default Counter;