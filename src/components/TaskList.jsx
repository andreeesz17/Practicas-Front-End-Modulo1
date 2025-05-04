import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux'; // Importa 'useSelector' correctamente

const TaskList = () => {
  // Usa useSelector para obtener las tareas desde el store
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <ul id="taskList">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-tasks"></i>
          <p>No hay tareas</p>
        </div>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default TaskList;
