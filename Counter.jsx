import React from "react";
import { useState } from "react";
import "./Counter.css";

//creating counter element

const Counter = () => {

    // using hooks for seting the value

    const [num, setNum] = useState(1)


    //creating function for inc and dec the value

    const incNum = () => {
        if (num < 1000) {

            setNum(num + 1)
        }
    }
    const decNum = () => {
        if (num > 1) {

            setNum(num - 1)
        } else {
            setNum(1)
        }
    }

    //creating handle change event for putting the value in the counter;
   
    const handleChange = (e) => {
        setNum(null);
        setNum((num) => +num + Number(e.target.value));
    }


    //returning buttons and input box in a main div
    return (
        <>

            <div className='main'>

                <div className="btn-div">
                    <button className="dec" onClick={decNum}>-</button>

                    <input className=".h1" type="number" onChange={handleChange} value={num} />
                    <button className="inc" onClick={incNum}>+</button>
                </div>

            </div>
        </>
    )
}

export default Counter

// exported the component to the app page