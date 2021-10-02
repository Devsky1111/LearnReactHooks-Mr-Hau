import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function TestUseeffect(props) {
    const [count, setCount] = useState(0)
    const [countdown, setCoundown] = useState(-1)
    function handleclickCount() {
        return setCount(count + 1)
    }
    function handleclickCountdown() {
        return setCoundown(countdown - 1)
    }
    useEffect(() => {
        console.log(`UseEffect o day tai lan render thu ${count} `)
        return () => {
            console.log("Trong function tra ve tuong duong componentWillUnmount")
        }
    }, [count])


    return (
        <div>
            <div onClick={handleclickCount}>
                You clicked {count} times -countup
            </div>
            <div onClick={handleclickCountdown}>
                You clicked {count} times -countdown
            </div>
        </div>

    )
}



export default TestUseeffect

