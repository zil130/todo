import { FC, useState } from 'react';
import { styled } from 'styled-components';
import { ITodo } from '../types/data';

const StyledForm = styled.form`
  width: 100%;

  .input {
    padding: 5px 15px;
    width: 100%;
    font-size: 24px;
  }
`;

interface TodoFormProps {
  onSubmit: (todo: ITodo) => void;
}

const TodoForm: FC<TodoFormProps> = (props) => {
  const [value, setValue] = useState('');

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

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
    <StyledForm onSubmit={onSubmit}>
      <input
        className='input'
        type="text"
        placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyledForm>
  );
};

export default TodoForm;
