import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: "All",
  },

  reducers: {
    addTodo: (state, { payload }) => {
      const newTodo = {
        id: Date.now(),
        title: payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleCompleted: (state, { payload }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );
      state.todos[index].completed = payload.completed;
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },

    deleteCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  addTodo,
  toggleCompleted,
  deleteTodo,
  deleteCompletedTodos,
  setFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
