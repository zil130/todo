import { FC, useState } from 'react';
import { styled } from 'styled-components';
import { ITodo } from '../types/data';

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

interface TodoFormProps {
  onSubmit: (todo: ITodo) => void;
}

const TodoForm: FC<TodoFormProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (value) {
      const newTodo: ITodo = {
        id: Date.now(),
        task: value,
        isCompleted: false,
      }

      props.onSubmit(newTodo);
      setValue('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        className='input'
        type="text"
        placeholder='What needs to be done?'
        autoFocus
        value={value}
        onChange={handleChange}
      />
    </StyledForm>
  );
};

export default TodoForm;
