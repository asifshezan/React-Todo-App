import React, { useState } from "react";

const NewTodo = (props) => {

    const [todo,setTodo] = useState("");

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo: </label>
                <input type="text" id="todo" name="todo" value={todo} onChange={handleTodoChange}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo;