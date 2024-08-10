import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/boardSlice';
import { TextField, Button } from '@mui/material';

const AddTaskForm = ({ columnId }) => {
  const [taskContent, setTaskContent] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskContent.trim() !== '') {
      dispatch(addTask({ columnId, content: taskContent }));
      setTaskContent('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <TextField
        variant="outlined"
        size="small"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="New Task"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
