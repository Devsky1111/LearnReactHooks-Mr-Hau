import { useState } from 'react'
import './boxcolor1.scss'
import './../Boxcolor/boxcolor.scss'

export function HookinReactJs() {
    function handleChangebackground() {
        return backgroundColor === "red" ? setbackgroundColor("green") : setbackgroundColor("red")
    }
    const [backgroundColor, setbackgroundColor] = useState("red") // trong useState này là tham số của initialState
    return (

        <h2 className="testbox"
            style={{ backgroundColor: backgroundColor }}
            onClick={handleChangebackground}
        >
            Example1: Hook trong React JS
        </h2>

    )
}