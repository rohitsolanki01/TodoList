import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./todoList.css";
export default function TotoList() {
  let [todos, setTodos] = useState([{ task: "sample todo", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let toUpperCase = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let isDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };
  let getTodoItemStyle = (isDone) => {
    return isDone ? { textDecoration: "line-through" } : {};
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="todo-heading">TodoList</h1>
        <br />
        <br />
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
          {todos.map((todo) => {
            return (
              <li className="todo-item" key={todo.id}>
                <span style={getTodoItemStyle(todo.isDone)}>{todo.task}</span>
                &nbsp;
                <button
                  className="delete_btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                &nbsp;&nbsp;
                <button
                  className="edit_btn"
                  onClick={() => toUpperCase(todo.id)}
                >
                  ToUpperCase
                </button>
                <button className="isDone_btn" onClick={() => isDone(todo.id)}>
                  {todo.isDone ? "Undo" : "Done"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
