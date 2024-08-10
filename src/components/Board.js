import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import AddColumnForm from './AddColumnForm';
import { moveTask } from '../features/boardSlice';
import { Grid, Box } from '@mui/material';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.board.columns);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    dispatch(moveTask({
      sourceColumnId: parseInt(source.droppableId),
      destinationColumnId: parseInt(destination.droppableId),
      taskId: parseInt(draggableId),
    }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box>
        <Grid container spacing={2}>
          {columns.map((column) => (
            <Grid item xs={12} sm={4} key={column.id}>
              <Column column={column} />
            </Grid>
          ))}
        </Grid>
        <AddColumnForm />
      </Box>
    </DragDropContext>
  );
};

export default Board;
