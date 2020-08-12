import React, { useContext } from 'react';
import { ToDo } from './ToDo';

import { GlobalContext } from '../context/GlobalState';

export const ToDoList = () => {
  const { todos } = useContext(GlobalContext);
  console.log(todos);
  return (
    <>
      <h3>To Dos</h3>
      {todos.length !== 0 ? (
        <ul className='list'>
          {todos.map((todo) => (
            <ToDo key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <h2>You have no to-dos for today!</h2>
      )}
    </>
  );
};
