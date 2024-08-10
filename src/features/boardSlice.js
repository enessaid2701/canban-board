import { createSlice } from '@reduxjs/toolkit';

// Sabit sütunlar
const initialColumns = [
  {
    id: 1,
    title: 'To Do',
    taskIds: [],
  },
  {
    id: 2,
    title: 'In Progress',
    taskIds: [],
  },
  {
    id: 3,
    title: 'Done',
    taskIds: [],
  },
];

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    columns: initialColumns,
    tasks: {},
  },
  reducers: {
    // Yeni sütun ekleme
    addColumn: (state, action) => {
      const newColumn = {
        id: state.columns.length + 1 + Date.now(),
        title: action.payload,
        taskIds: [],
      };
      state.columns.push(newColumn);
    },
    // Yeni görev ekleme (sadece "To Do" sütununa)
    addTask: (state, action) => {
      const { columnId, content } = action.payload;
      const newTaskId = Date.now();
      state.tasks[newTaskId] = { id: newTaskId, content: content };
      const column = state.columns.find(col => col.id === columnId);
      if (column) {
        column.taskIds.push(newTaskId);
      }
    },
    // Görevlerin sürüklenmesi (sütunlar arasında)
    moveTask: (state, action) => {
      const { sourceColumnId, destinationColumnId, taskId } = action.payload;

      const sourceColumn = state.columns.find(col => col.id === sourceColumnId);
      const destinationColumn = state.columns.find(col => col.id === destinationColumnId);

      if (!sourceColumn || !destinationColumn) return;

      // Kaynak sütundan görevi kaldır
      sourceColumn.taskIds = sourceColumn.taskIds.filter(id => id !== taskId);

      // Hedef sütuna görevi ekle
      destinationColumn.taskIds.push(taskId);
    },
  },
});

export const { addColumn, addTask, moveTask } = boardSlice.actions;
export default boardSlice.reducer;
