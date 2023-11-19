import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App= () => {
 const [todos,setTodos] = useState(()=>{
  return JSON.parse(localStorage.getItem('todos')) || []
 })


 useEffect(() => {
   const geTLOcalStorig = JSON.parse(localStorage.getItem('todos'))
   
   if (geTLOcalStorig !== null) {
    setTodos(geTLOcalStorig)
  }

 },[])

 useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
 },[todos])


const addTodo =(text) =>{
  const todo = {
        id: nanoid(),
        text,
      };

setTodos((prevState)=>{
  return [...prevState, todo]
    })
}

const handleSubmit = data => {
    addTodo(data);
  };


 const  deleteTodo = id => {
   setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };


  // state = {
  //   todos: [],
  // };

  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));

  //   if (todos) {
  //     this.setState(() => ({ todos }));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevState.todos !== todos) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [...todos, todo],
  //   }));
  // };

  // handleSubmit = data => {
  //   this.addTodo(data);
  // };

  // deleteTodo = id => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id),
  //   }));
  // };

  // render() {
  //   const { todos } = this.state;

    return (
      <>
        <Header />
        <Section>
          <Container>
            <SearchForm onSubmit={handleSubmit} />

            {todos.length === 0 && (
              <Text textAlign="center">There are no any todos ... </Text>
            )}

            <Grid>
              {todos.length > 0 &&
                todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                      onClick={deleteTodo}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        </Section>
      </>
    );
}
