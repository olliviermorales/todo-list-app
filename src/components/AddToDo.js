import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddToDo = () => {
  const [text, setText] = useState('');

  const { addTodo } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      text,
    };

    addTodo(newTodo);
    setText('');
  };

  return (
    <>
      <h3>Add new Todo</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Todo</label>
          <input
            type='text'
            className='input-add-todo'
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter todo...'
          />
        </div>
        <button className='btn'>Add todo</button>
      </form>
    </>
  );
};
