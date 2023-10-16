import React from 'react';
import { styled } from 'styled-components';
import { ITodo } from '../types/data';
import { useAppDispatch } from '../hooks';
import { toggleTodoComplete } from '../store/todoSlice';
import check from '../icons/check.svg';

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

function TodoItem(props: ITodo) {
  const { id, title, completed } = props;
  const dispatch = useAppDispatch();

  return (
    <StyledTodoItem>
      <StyledCheckbox
        type="checkbox"
        id={id.toString()}
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <label htmlFor={id.toString()}>{title}</label>
    </StyledTodoItem>
  );
}

export default TodoItem;
