import { FC } from 'react';
import { ITodo } from '../types/data';
import { styled } from 'styled-components';
import check from '../icons/check.svg'

const StyledTodoItem = styled.div`
  padding: 15px; 
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid lightgrey;
  font-size: 24px;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &:checked + label {
    text-decoration: line-through;
    color: grey;
  }

  & + label::before {
    content: '';
    display: inline-block;
    margin-right: 0.5em;
    width: 1.1em;
    height: 1.1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid lightgrey;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:checked + label::before {
    border: 1px solid green;
    background-image: url('${check}');
    background-size: 80%;
  }
`;

interface ITodoItem extends ITodo {
  toggleTodoStatus: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = (props) => {
  const { id, task, isCompleted, toggleTodoStatus } = props;

  return (
    <StyledTodoItem>
      <StyledCheckbox
        type="checkbox"
        id={id.toString()}
        checked={isCompleted}
        onChange={() => toggleTodoStatus(id)}
      />
      <label htmlFor={id.toString()}>{task}</label>
    </StyledTodoItem>
  );
};

export default TodoItem;
