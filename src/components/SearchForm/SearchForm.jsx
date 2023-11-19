import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { addTodo } from 'redux/todosSlice';
import { useDispatch } from 'react-redux';

export const SearchForm= () =>{
const [ query, setQuery]= useState('')
const dispath = useDispatch()
const handleInput = (evt)=>{
  setQuery(evt.currentTarget.value)
}

const handleSubmit =(evt) =>{
  evt.preventDefault()

  dispath(addTodo(query))
  setQuery('')
}


    return (
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    );
}
