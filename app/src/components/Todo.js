import React from "react";

import TodoItem from "./TodoItem"
function Todo(props) {
        return(
            <div>
                <ul>
                    {props.todos.map(todo => (
                        <TodoItem 
                        todo = {todo} 
                        handle = {props.handle}
                        deleteTodo = {props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    
}

export default Todo 