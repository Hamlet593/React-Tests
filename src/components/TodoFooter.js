const TodoFooter = ({todos, onClearCompleted}) => {

  const completedSize = todos.filter(todo => todo.isCompleted);

  return (
    <div>
        <span>{completedSize.length}/{todos.length} Completed</span>
        <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter;