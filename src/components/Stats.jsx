import React from 'react';
import { useSelector } from 'react-redux';

function Stats() {
  const tasks = useSelector((state) => state.tasks.items);

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const active = total - completed;

  return (
    <div className="stats">
      <div className="stat-item">
        <h3>Total de tareas</h3>
        <p>{total}</p>
      </div>
      <div className="stat-item">
        <h3>Tareas Completadas</h3>
        <p>{completed}</p>
      </div>
      <div className="stat-item">
        <h3>Tareas Activas</h3>
        <p>{active}</p>
      </div>
    </div>
  );
}

export default Stats;
