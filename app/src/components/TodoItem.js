import React from "react"

class TodoItem extends React.Component{

    render(){
        const{completed , id , title} = this.props.todo;
        return(
            <div>
                <li className = "todo-item">
                    <input 
                    type="checkbox"
                    checked = {completed}
                    onChange = {()=> this.props.handle(id)}
                    />
                    <span className={completed?"completed" : null}>{title}</span>
                    <button className="btn-style" onClick={()=>this.props.deleteTodo(id)}> X </button>
                </li>
            </div>
        )
    }
}

export default TodoItem