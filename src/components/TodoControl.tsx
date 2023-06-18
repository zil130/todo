import { FC, useState } from "react";
import { styled } from "styled-components";

const StyledTodoControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background: #ffffff;

  .active {
    border: 1px solid green;
  }
`;

const StyledButton = styled.button`
  margin-left: 15px;
  padding: 5px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: green;
    text-decoration: underline;
  }
`;

type TodoControlProps = {
  activeTodos: number;
  clearCompleted: () => void;
  sortTodos: (id: string) => void;
}

const TodoControl: FC<TodoControlProps> = ({activeTodos, clearCompleted, sortTodos}) => {
  const [buttons, setButtons] = useState([
    { id: 'All', active: true },
    { id: 'Active', active: false },
    { id: 'Completed', active: false },
  ]);

  const highlightBtn = (id: string) => {
    setButtons(buttons.map((btn) => {
      return {...btn, active: btn.id === id};
    }));
  };

  const handleClick = (id: string) => {
    highlightBtn(id);
    sortTodos(id);
  }

  return (
    <StyledTodoControl>
      <div>{activeTodos} items left</div>
      <div>
        {buttons.map((btn) => 
          <StyledButton
            key={btn.id}
            className={btn.active ? 'active' : ''}
            onClick={() => handleClick(btn.id)}
          >
            {btn.id}
          </StyledButton>
        )}
      </div>
      <div>
        <StyledButton onClick={clearCompleted}>Clear completed</StyledButton>
      </div>
    </StyledTodoControl>
  );
};

export default TodoControl;
