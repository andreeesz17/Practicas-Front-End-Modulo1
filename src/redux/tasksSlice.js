import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        text: action.payload.text,
        completed: false,
        priority: "normal",
        createdAt: Date.now(),
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Exporta las acciones
export const { addTask, toggleTask, deleteTask, setFilter } = tasksSlice.actions;

// Exporta el reducer
export default tasksSlice.reducer;
