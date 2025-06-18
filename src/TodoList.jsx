import { useState } from "react";
import "./todoList.css"
export default function TotoList(){

    let [todos , setTodos] = useState(["sample todo"]);
    let [newTodo , setNewTodo] = useState("");

    let addTodo = () => {
      setTodos(
        [...todos , newTodo])
        setNewTodo("");
    }

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    return(
        <>
           <div className="todo-container">
            <h1 className="todo-heading" >TodoList</h1>
            <br /><br />
            <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={updateTodo}
          placeholder="Enter a new task..."
          className="todo-input"
        />
        <button className="add-button" onClick={addTodo}>
          ➕ Add
        </button>
      </div>
            <hr />
            <br />
            <ul className="todo-list">
                {
                    todos.map( (todo) => {
                        return <li className="todo-item">{todo}</li>
                    })
                }
            </ul>
            </div>
        </>
    );
}