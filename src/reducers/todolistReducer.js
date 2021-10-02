var initialState = [
    { id: 1, name: "Redux1", age: 27 },
    { id: 2, name: "Redux2", age: 35 },
    { id: 3, name: "Redux3", age: 32 },
]

var todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action)
            state.push(action.todo)
            return [...state]
        case "REMOVE_TODO":
            console.log(action)
            var index = state.findIndex((ele, index) => { return ele.id === action.todoremove.id })
            console.log(index)
            state.splice(index, 1)
            return [...state]

        default:
            console.log("default")
            return state
    }

}
export default todolistReducer