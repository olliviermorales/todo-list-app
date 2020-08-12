import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ToDo = ({ todo }) => {
  const { deleteTodo, todos } = useContext(GlobalContext);

  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(!done);
  };

  const setUpdate = (text, key) => {
    todos.map((todo) => {
      if (todo.id === key) {
        todo.text = text;
      }
      return todo.text;
    });
  };

  return (
    <li className={done ? 'done' : 'not-done'}>
      <input
        type='text'
        className='input-update-todo'
        id={todo.id}
        defaultValue={todo.text}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
      />
      <button onClick={() => deleteTodo(todo.id)} className='delete-btn'>
        x
      </button>
      <button onClick={() => handleClick()} className='check-btn'>
        ✓
      </button>
    </li>
  );
};
