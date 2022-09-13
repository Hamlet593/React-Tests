import { useState } from "react";
import "./style.css/TodoForm.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <form
      className="todoAppForm"
      onSubmit={(evt) => {
        evt.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        className="todoInput"
        type="text"
        value={text}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
      <button className="todoAppAddButton">Add</button>
    </form>
  );
};

export default TodoForm;
