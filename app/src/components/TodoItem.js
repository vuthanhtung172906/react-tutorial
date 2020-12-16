import React from "react"

function TodoItem(props){

 
        const{completed , id , title} = props.todo;
        return(
            <div>
                <li className = "todo-item">
                    <input 
                    type="checkbox"
                    checked = {completed}
                    onChange = {()=> props.handle(id)}
                    />
                    <span className={completed?"completed" : null}>{title}</span>
                    <button className="btn-style" onClick={()=>props.deleteTodo(id)}> X </button>
                </li>
            </div>
        )
}

export default TodoItem