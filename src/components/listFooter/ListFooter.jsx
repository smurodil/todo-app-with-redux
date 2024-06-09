import './listFooter.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompletedTodos, setFilter } from '../../redux/todoSlice'

function ListFooter() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.todos.todos.length)

  function clearCompleted() {
    dispatch(deleteCompletedTodos());
  }

  function allTodos() {
    dispatch(setFilter("All"));
  }

  function activeTodos() {
    dispatch(setFilter("Active"));
  }

  function completedTodos() {
    dispatch(setFilter("Completed"));
  }

  return (
    <div className='list-footer'>
      <div>
        {listItems} Item left
      </div>
      <div>
        <button onClick={allTodos}>All</button>
        <button onClick={activeTodos}>Active</button>
        <button onClick={completedTodos}>Completed</button>
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
}

export default ListFooter