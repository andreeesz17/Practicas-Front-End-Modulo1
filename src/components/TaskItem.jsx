import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className={`task-card ${task.completed ? "completed" : ""}`} data-id={task.id}>
      <div className="task-body">
        <p className="task-text">{task.text}</p>
      </div>
      <div className="task-controls">
        <button className="mark-done" onClick={handleToggle} title={`Marcar como ${task.completed ? "pendiente" : "completada"}`}>
          <i className={`fas ${task.completed ? "fa-undo" : "fa-check"}`}></i>
        </button>
        <button className="delete-task" onClick={handleDelete} title="Eliminar tarea">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
