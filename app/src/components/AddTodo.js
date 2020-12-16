import React,{useState} from "react"

function AddTodo(props){
    const [title, setTitle] = useState("");
    const onInputChange = e =>{
        setTitle(e.target.value)
    };
    const textSubmid = e =>{
        e.preventDefault();
        props.addTodo(this.state.title);
        setTitle("")
    }
    
    return(
        <form className="form-container" onSubmit={textSubmid}>
            <input 
            type="text" 
            placeholder="Add Todo ..." 
            className="input-text" 
            value = {title}
            onChange = {onInputChange}
            />
            <input type="submit" value="Submit" className="input-submit" />
        </form>
    )
    
}
export default AddTodo;