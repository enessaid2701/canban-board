import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

const Task = ({ taskId, index }) => {
  const task = useSelector((state) => state.board.tasks[taskId]);

  if (!task) return null;

  return (
    <Draggable draggableId={String(taskId)} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: '8px',
            marginBottom: '8px',
            backgroundColor: '#f4f5f7',
            ...provided.draggableProps.style,
          }}
        >
          <Typography variant="body1">{task.content}</Typography>
        </Paper>
      )}
    </Draggable>
  );
};

export default Task;
