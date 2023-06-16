import { FC } from 'react';
import { styled } from 'styled-components';
import { ITodo } from '../types/data';
import TodoItem from './TodoItem';

const StyledList = styled.div`
  width: 100%;
  background: #ffffff;
`;

interface ITodoListProps {
  items: ITodo[];
  toggleTodoStatus: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
  const { items, toggleTodoStatus } = props;

  return (
    <StyledList>
      {items.map((todo) =>
        <TodoItem
          key={todo.id}
          toggleTodoStatus={toggleTodoStatus}
          {...todo}
        />
      )}
    </StyledList>
  );
};

export default TodoList;
