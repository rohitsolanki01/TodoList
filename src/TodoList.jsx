import { useState } from "react";

export default function TodoList(){
    let [todos , setTodos] = useState(["semple Todo"]);
    let [newTodo , setNewtodos] = useState("");

    let addTodo = () => {
        setTodos( (prev) => {
            return [...prev, newTodo];
        })
    }
    let updateTodo = (event) => {
        setNewtodos(event.target.value)
    }   

    return(
        <>
        <h1>TodoList</h1>
        <br /><br /> 
        <input type="text" value={newTodo} onChange={updateTodo} />
        <br /><br />
        <button style={{backgroundColor: "blue"}} onClick={addTodo}>add Todo</button>
        <hr />
        <br /><br />
        <ul>
            {
                todos.map( (todo) => {
                 return   <li>{todo}</li>
                })
            }
        </ul>

        </>
    );
}