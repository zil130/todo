import { FC, useState } from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import { ITodo } from '../types/data';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (newTodo: ITodo): void => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id: number): void => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }

      return todo;
    }));
  };

  return (
    <StyledApp>
      <Header />
      <TodoForm onSubmit={addTodo} />
      <TodoList items={todos} toggleTodoStatus={toggleTodoStatus} />
    </StyledApp>
  );
};

export default App;
