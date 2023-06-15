import { FC } from 'react';
import { styled } from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 70px;
  font-weight: 100;
  color: #e9d9d8;
  text-align: center;
`;

const Header: FC = () => {
  return (
    <StyledTitle>todos</StyledTitle>
  )
};

export default Header;
