import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText }));
      setTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        id="taskInput"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
        placeholder="Agregar una nueva tarea"
      />
      <button id="addTask" onClick={handleAddTask}>
        Agregar tarea
      </button>
    </div>
  );
};

export default TaskInput;
