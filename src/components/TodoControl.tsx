import { FC, useMemo, useState } from "react";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearCompleted, changeDisplayOption } from "../store/todoSlice";
import { DisplayOption } from "../types/data";

const StyledTodoControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background: #ffffff;

  .active {
    border: 1px solid green;
    color: green;
    cursor: default;
  }

  .active:hover {
    text-decoration: none;
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

const TodoControl: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos: number = useMemo(() => {
    const result = todos.filter((todo) => !todo.completed);
    return result.length;
  }, [todos]);
  const dispatch = useAppDispatch();

  const [buttons, setButtons] = useState([
    { id: DisplayOption.All, active: true },
    { id: DisplayOption.Active, active: false },
    { id: DisplayOption.Completed, active: false },
  ]);

  const handleClick = (id: DisplayOption) => {
    setButtons(buttons.map((btn) => {
      return {...btn, active: btn.id === id};
    }));
    dispatch(changeDisplayOption(id));
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
        <StyledButton onClick={() => dispatch(clearCompleted())}>Clear completed</StyledButton>
      </div>
    </StyledTodoControl>
  );
};

export default TodoControl;
