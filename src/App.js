import './app.scss';
import Boxcolorclass from './Components/Boxcolor/boxcolor';
import { HookinReactJs } from './Components/boxcolorfn/boxcolorfn';
import Todolist from './Components/Todolist/todolist';
import Todolist2 from './Components/Todolist/todolist2';
import Addtodo from './Components/Todolist/Addtodo';
import { useState } from "react";
import TodolistRedux from './Components/Todolist/todolistRedux';
import TestUseeffect from './useEffecttest'
import { useEffect } from 'react';

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
  const [postList, setpostList] = useState([])

  useEffect(() => {
    async function fetchPostList() {
      //...
      try {
        const requestUrl = 'http://js-post-apposts?_limit=10&_page=1 i.herokuapp.com/api/';
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log({ responseJSON })
        const { data } = responseJSON
        setpostList(data)
      } catch (error) {
        console.log("LOI", error.message)
      }

    }
    fetchPostList()

  }, []) // [] de chi chay 1 lan

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
      <TestUseeffect />
    </div>
  );
}

export default App;
