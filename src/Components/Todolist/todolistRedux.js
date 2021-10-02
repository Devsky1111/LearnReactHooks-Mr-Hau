import { connect } from "react-redux";
import React from 'react'
import { removetodo } from './../actions/actioncreator'

function TodolistRedux({ listfromredux, removeTodo }) {
    function removeTodofromreact(ele) {
        removeTodo(ele)
    }
    console.log(listfromredux)
    var listrender = listfromredux.map((ele, index) => {
        return (
            <tr
                key={index}
                onClick={() => { removeTodofromreact(ele) }}
            >
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td></td>

            </tr >
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Age</th>
                    <th>Ghi chú</th>
                </tr>
            </thead>
            <tbody>
                {listrender}

            </tbody>
        </table>
    )
}

var mapStateToProps = (state, props) => {
    return {
        listfromredux: state.showtodo
    }
}
var mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (ele) => {
            return dispatch(removetodo(ele))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodolistRedux)