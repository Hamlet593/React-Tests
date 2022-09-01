import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn CSS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Learn JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: false,
    }
  ])

  return (
    <div className="App">
      <TodoForm onAdd={text => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false,
          }
        ])
      }} />
      <TodoList
        todos={todos}
        onChange={(changedTodo) => {
          setTodos(todos.map(todo => {
            if (todo.id === changedTodo.id) {
              return changedTodo
            } else return todo;
          }))
        }}
        onDelete={(id) => {
          setTodos(todos.filter(todo => todo.id !== id))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isCompleted))
      }}/>
    </div>
  );
}

export default App;