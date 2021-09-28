import React from 'react'
import { useState } from 'react'
import { addtodo } from '../actions/actioncreator'
import { connect } from 'react-redux'
function Addtodo(props) {
    const [valueInputName, setValueInput] = useState("")
    const [valueInputAge, setValueInputAge] = useState("")
    function handleChange(e) {
        return setValueInput(e.target.value)
    }
    function handleChange1(e) {
        return setValueInputAge(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const onFormvalue = {
            name: valueInputName,
            age: valueInputAge
        }
        // redux
        props.dispatchAddtodo(onFormvalue)




        if ((valueInputAge && valueInputAge) !== "") {
            props.onsubmit(onFormvalue)
            setValueInput("")
            setValueInputAge("")
        }



    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={valueInputName} onChange={handleChange} placeholder="Name" />
                <input type="text" value={valueInputAge} onChange={handleChange1} placeholder="Age" />
                <button type="submit" >Add To do</button>
            </form>
        </div>
    )
}

var mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddtodo: (onFormvalue) => {
            return dispatch(addtodo(onFormvalue))
        }
    }
}

export default connect(null, mapDispatchToProps)(Addtodo)

