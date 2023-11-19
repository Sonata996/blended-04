import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todosSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [query, setQuery] = useState(text)
  const dispatch = useDispatch()
  const hendlerUpdata= () =>{
   dispatch(updateTodo({query, id}))
  }


  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <input value={query} 
        onChange={(evt)=> setQuery(evt.currentTarget.value)
        } type='text'/>
        <button onClick={hendlerUpdata}>Updata</button>
      </TodoWrapper>
    </>
  );
};
