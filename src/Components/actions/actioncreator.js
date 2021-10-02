export var addtodo = (todo) => {
    return {
        type: "ADD_TODO",
        todo: todo
    }
}

export var removetodo = (todoremove) => {
    return {
        type: "REMOVE_TODO",
        todoremove: todoremove
    }
}