import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../../redux/todoSlice';
import './todoItem.css'; 
import iconCross from '../../assets/icon-cross.svg'
import checkIcon from '../../assets/icon-check.svg'

function TodoItem({ todo }) {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();

  const handleCompletedClick = () => {
    dispatch(toggleCompleted({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div onClick={handleCompletedClick}>
        <div className={`checkbox ${completed ? 'completed' : ''}`}>
          {completed && <img src={checkIcon} />}
        </div>
        <p className={completed ? 'completed' : ''}>{title}</p>
      </div>
      <img src={iconCross} onClick={handleDeleteClick} />
    </div>
  );
}

export default TodoItem;