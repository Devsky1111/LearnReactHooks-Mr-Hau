import './app.scss';
import Boxcolorclass from './Components/Boxcolor/boxcolor';
import { HookinReactJs } from './Components/boxcolorfn/boxcolorfn';
import Todolist from './Components/Todolist/todolist';
import Todolist2 from './Components/Todolist/todolist2';
import Addtodo from './Components/Todolist/Addtodo';
import { useState } from "react";
import TodolistRedux from './Components/Todolist/todolistRedux';
const data = [
  { id: 1, name: "Trung", age: 27 },
  { id: 2, name: "Quang", age: 35 },
  { id: 3, name: "Hoàng", age: 32 },
]

function App() {
  const [list, setList] = useState(data)
  function handleClickfromTodolist(dulieunhantuTodolist) {
    var index1 = data.findIndex((ele, index) => {
      return ele.name === dulieunhantuTodolist.name
    }
    )
    console.log(index1)
    data.splice(index1, 1)
    console.log(data)
    var data1 = [...data]
    return setList(data1)
  }

  function handleSubmitAdd(valuefromAddtodo) {
    data.push(valuefromAddtodo)
    console.log(data)
    var data2 = [...data]
    return setList(data2)
  }
  return (
    <div className="app">
      {/* <h1>Test React</h1> */}
      <Boxcolorclass />
      <HookinReactJs />
      <Addtodo onsubmit={handleSubmitAdd} />
      <Todolist
        data1={list}
        truyenveApp={handleClickfromTodolist} />
      <Todolist2
        list2={data}
        truyenvetutodolist2={handleClickfromTodolist}
      />
      <TodolistRedux />
    </div>
  );
}

export default App;
