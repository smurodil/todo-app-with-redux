import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import ListFooter from "../listFooter/ListFooter";
import './todoList.css'

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  let filteredTodo = [];
  if (filter === "All") {
    filteredTodo = todos;
  } else if (filter === "Active") {
    filteredTodo = todos.filter((todo) => !todo.completed);
  } else if (filter === "Completed") {
    filteredTodo = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="todo-list">
      {filteredTodo?.length > 0 &&
        filteredTodo.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      <ListFooter />
    </div>
  );
}

export default TodoList;
