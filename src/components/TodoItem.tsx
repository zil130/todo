import { FC } from 'react';
import { ITodo } from '../types/data';
import { styled } from 'styled-components';

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid lightgrey;
  font-size: 24px;

  input:checked + span {
    text-decoration: line-through;
  }
`;

interface ITodoItem extends ITodo {
  toggleTodoStatus: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = (props) => {
  const { id, task, isCompleted, toggleTodoStatus } = props;

  return (
    <StyledTodoItem>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTodoStatus(id)}
      />
      <span>{task}</span>
    </StyledTodoItem>
  )
};

export default TodoItem;
