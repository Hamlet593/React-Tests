import "./style.css/TodoItem.css";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div className="todoListItem">
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        {todo.text}
        <button
          className="todoListItemDelete"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          X
        </button>
      </label>
    </div>
  );
};

export default TodoItem;
