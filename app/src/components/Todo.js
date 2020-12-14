import React from "react";

import TodoItem from "./TodoItem"
class Todo extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem 
                        todo = {todo} 
                        handle = {this.props.handle}
                        deleteTodo = {this.props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo 