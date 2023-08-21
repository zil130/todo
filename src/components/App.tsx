import { FC } from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

const App: FC = () => {
  return (
    <StyledApp>
      <Header />
      <TodoForm />
      <TodoList />
    </StyledApp>
  );
};

export default App;
