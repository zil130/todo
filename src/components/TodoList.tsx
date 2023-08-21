import { FC } from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { useAppSelector } from '../hooks';

const StyledList = styled.div`
  width: 100%;
  background: #ffffff;
`;

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <StyledList>
      {todos.map((todo) =>
        <TodoItem
          key={todo.id}
          {...todo}
        />
      )}
    </StyledList>
  );
};

export default TodoList;
