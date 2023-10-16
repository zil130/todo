import React from 'react';
import { styled } from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 70px;
  font-weight: 100;
  color: #e9d9d8;
  text-align: center;
`;

function Header() {
  return <StyledTitle>todos</StyledTitle>;
}

export default Header;
