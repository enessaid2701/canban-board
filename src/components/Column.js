import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import { Paper, Typography } from '@mui/material';

const Column = ({ column }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', minHeight: '300px' }}>
      <Typography variant="h6">{column.title}</Typography>
      <Droppable droppableId={String(column.id)}>
        {(provided) => (
          <div
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: '200px', marginBottom: '16px' }}
          >
            {column.taskIds.map((taskId, index) => (
              <Task key={taskId} taskId={taskId} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {column.title === 'To Do' && <AddTaskForm columnId={column.id} />}
    </Paper>
  );
};

export default Column;
