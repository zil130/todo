import React from 'react';
import { styled } from 'styled-components';
import Header from './components/Header';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
}

export default App;
