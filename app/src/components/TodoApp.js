import {v4 as uuid} from "uuid"; 
import React from "react";
import Header from "./layout/Header";
import Todo from "./Todo"
import AddTodo from "./AddTodo";
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id : 1,
                title: "Create React App",
                completed: true
            },
            {
                id: 2,
                title: "Do A Todo App",
                completed: false
            },
            {
                id: 3,
                title: "React Hook & React Redux",
                completed: false
            },
            {
                id: 4,
                title: "Design with Ant Design",
                completed: false
            }
        ]
    }
    handle = id =>{
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteTodo = id =>{
        this.setState({
            todos: this.state.todos.filter(todo =>{
                return todo.id !== id;
            })
        })
    }
    addTodo = title =>{
        const newTodo = {
            id: uuid,
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos,newTodo]
        })
    }
    render(){
        return (
            <div className = "container">
                <Header/>
                <AddTodo addTodo = {this.addTodo}/>
                <Todo todos = {this.state.todos} handle = {this.handle} deleteTodo = {this.deleteTodo}/>
            </div>
        )
    }
}

export default TodoApp;