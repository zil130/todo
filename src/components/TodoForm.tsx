import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../store/todoSlice';

const StyledForm = styled.form`
  width: 100%;

  .input {
    padding: 25px 15px;
    width: 100%;
    font-size: 24px;
    outline: none;
    border: none;
    border-bottom: 2px solid lightgrey;
  }
`;

function TodoForm() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={handleChange}
      />
    </StyledForm>
  );
}

export default TodoForm;
