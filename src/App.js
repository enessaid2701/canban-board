import React from 'react';
import { Container, Typography } from '@mui/material';
import Board from './components/Board';

function App() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Kanban Board
      </Typography>
      <Board />
    </Container>
  );
}

export default App;
