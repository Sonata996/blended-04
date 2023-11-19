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
    },
    updateTodo:(state,action) =>{
      const { id, query } = action.payload
      state.todos = state.todos.map(elem => {

        return  elem.id ===id? 
          {...elem, text: query} :
        elem
      })
    }
  }
});

export const { addTodo, deleteTodo,updateTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;