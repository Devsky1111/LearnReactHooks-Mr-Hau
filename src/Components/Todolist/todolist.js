import './todolist.scss'
function Todolist(props) {
    var arr = props.data1
    function removeItems(phantucanxoa) {
        props.truyenveApp(phantucanxoa)
    }
    var elements = arr.map((ele, index) => {
        return <tr
            key={index}
            onClick={() => removeItems(ele)}

        >
            <td>{index + 1}</td>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td></td>
        </tr>
    })
    console.log(elements)
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
                {elements}

            </tbody>
        </table>
    )
}
export default Todolist
