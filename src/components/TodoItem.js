const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div>
      <input type='checkbox' checked={todo.isCompleted} onChange={evt => {
        onChange({
          ...todo,
          isCompleted: evt.target.checked
        })
      }} />
      {todo.text}
      <button onClick={() => {
        onDelete(todo.id)
      }}>X</button>
    </div>
  )
}

export default TodoItem;