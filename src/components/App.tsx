import { FC, useState, useMemo } from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import { ITodo } from '../types/data';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoControl from './TodoControl';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [showedTodos, setShowedTodos] = useState<string>('All');

  const activeTodos: number = useMemo(() => {
    const result = todos.filter((todo) => !todo.isCompleted);
    return result.length;
  }, [todos]);

  const sortedTodos = useMemo(() => {
    if (showedTodos === 'Active') {
      return [...todos].filter((todo) => !todo.isCompleted);
    }

    if (showedTodos === 'Completed') {
      return [...todos].filter((todo) => todo.isCompleted);
    }

    return todos;
  }, [showedTodos, todos]);

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

  const sortTodos = (value: string): void => {
    setShowedTodos(value);
  }

  const clearCompleted = (): void => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <StyledApp>
      <Header />
      <TodoForm onSubmit={addTodo} />
      <TodoList items={sortedTodos} toggleTodoStatus={toggleTodoStatus} />
      <TodoControl
        activeTodos={activeTodos}
        clearCompleted={clearCompleted}
        sortTodos={sortTodos}
      />
    </StyledApp>
  );
};

export default App;
