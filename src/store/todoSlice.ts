import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, DisplayOption } from '../types/data';

type TodosState = {
  todos: ITodo[];
  displayOption: DisplayOption;
}

const initialState: TodosState = {
  todos: [],
  displayOption: DisplayOption.All,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    toggleTodoComplete(state, action: PayloadAction<number>) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    changeDisplayOption(state, action: PayloadAction<DisplayOption>) {
      state.displayOption = action.payload;
    },
  },
});

export const {
  addTodo, toggleTodoComplete, clearCompleted, changeDisplayOption,
} = todoSlice.actions;

export default todoSlice.reducer;
