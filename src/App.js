import "./style.css/App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todos</h1>
      </header>
      <TodoForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text,
              isCompleted: false,
            },
          ]);
        }}
      />
      <TodoList
        todos={todos}
        onChange={(id) => {
          setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                };
              } else return todo;
            })
          );
        }}
        onDelete={(id) => {
          setTodos(todos.filter((todo) => todo.id !== id));
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
