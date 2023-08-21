import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/data";

type TodosState = {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      })
    },

    toggleTodoComplete(state, action: PayloadAction<number>) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  }
})

export const  { addTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
