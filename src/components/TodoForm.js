import React, { useState } from 'react'

const TodoForm = ({ onAdd }) => {

    const [text, setText] = useState('');

    return (
        <form onSubmit={evt => {
            evt.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input type='text' value={text} onChange={evt => {
                setText(evt.target.value);
            }} />
            <button>Add</button>
        </form>
    )
}

export default TodoForm;