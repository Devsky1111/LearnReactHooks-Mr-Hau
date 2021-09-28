import React from 'react'

function Todolist2({ list2, truyenvetutodolist2 }) {
    function handleClick2(ele) {
        return truyenvetutodolist2(ele)
    }

    var listrender = list2.map((ele, index) => {
        return (
            <tr
                key={index}
                onClick={() => { handleClick2(ele) }}>
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



export default Todolist2


