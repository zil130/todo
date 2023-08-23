import { FC, useMemo } from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { useAppSelector } from '../hooks';

const StyledList = styled.div`
  width: 100%;
  background: #ffffff;
`;

const StyledNoTodos = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgrey;
  font-size: 24px;
`;

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const displayOption = useAppSelector((state) => state.todos.displayOption);

  const filteredTodos = useMemo(() => {
    if (displayOption === 'Active') {
      return todos.filter((todo) => !todo.completed);
    }

    if (displayOption === 'Completed') {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [todos, displayOption]);

  return (
    <StyledList>
      {
        filteredTodos.length
          ? filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
          : <StyledNoTodos>
              {`There Are No${displayOption === 'All' ? ' ' : ` ${displayOption} `}Todos`}
            </StyledNoTodos>
      }
    </StyledList>
  );
};

export default TodoList;
