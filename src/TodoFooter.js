import "./style.css/TodoFooter.css";

const TodoFooter = ({ todos, onClearCompleted }) => {
  const completedSize = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="todoAppFooter">
      <span>
        {completedSize.length}/{todos.length} Completed
      </span>
      <button
        className="todoClearCompleted"
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
