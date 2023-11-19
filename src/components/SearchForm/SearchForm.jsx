import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm= ({onSubmit}) =>{
const [ query, setQuery]= useState('')


const handleInput = (evt)=>{
  setQuery(evt.currentTarget.value)
}



const handleSubmit =(evt) =>{
  evt.preventDefault()

  onSubmit(query)
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
