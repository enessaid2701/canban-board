import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../features/boardSlice';
import { TextField, Button, Box } from '@mui/material';

const AddColumnForm = () => {
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    if (columnTitle.trim() !== '') {
      dispatch(addColumn(columnTitle));
      setColumnTitle('');
    }
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleAddColumn}>
        <TextField
          variant="outlined"
          size="small"
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
          placeholder="New Column Title"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Add Column
        </Button>
      </form>
    </Box>
  );
};

export default AddColumnForm;
