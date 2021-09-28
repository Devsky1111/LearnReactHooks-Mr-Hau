import { connect } from "react-redux";
import React from 'react'
function TodolistRedux({ listfromredux }) {

    console.log(listfromredux)
    var listrender = listfromredux.map((ele, index) => {
        return (
            <tr
                key={index}
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


export default connect(mapStateToProps, null)(TodolistRedux)