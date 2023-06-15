import { FC, useState } from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import { ITodo } from '../types/data';
import TodoForm from './TodoForm';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <StyledApp>
      <Header />
      <TodoForm onSubmit={addTodo} />
    </StyledApp>
  );
};

export default App;
