/* eslint-disable no-template-curly-in-string */
import {v4 as uuid} from "uuid"; 
import React,{useState, useEffect} from "react";
import Header from "./layout/Header";
import Todo from "./Todo"
import AddTodo from "./AddTodo";
import axios from "axios";
import Footer from "../store/containers/Footer"
function TodoApp (){
    const [state , setState] = useState({
        todos: []
    })
    const handle = id =>{
        setState({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    const deleteTodo = id =>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
        .then(res=>setState({
            todos:[
                ...state.todos.filter(todo=>{
                    return todo.id !== id; 
                })
            ]
        }))
    }
    const addTodo = title =>{
        const newTodo = {
            id: uuid,
            title: title,
            completed: false
        };
        setState({
            todos: [...state.todos,newTodo]
        })
    }
    useEffect(()=>{
        const config = {
            params:{
                _limit: 5
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos",config)
        .then(res => setState({
            todos: res.data
        }))
    },[])
  
    return (
        <div className = "container">
            <Header/>
            <AddTodo addTodo = {addTodo}/>
            <Todo todos = {state.todos} handle = {handle} deleteTodo = {deleteTodo}/>
            <Footer/>
        </div>
    )

}

export default TodoApp;