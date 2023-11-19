import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
      state.todos.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text
          }
        }
      }
    },
    
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;