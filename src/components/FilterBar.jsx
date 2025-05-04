import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filters">
      <select id="filterStatus" onChange={handleChange}>
        <option value="all">Todas</option>
        <option value="active">Activas</option>
        <option value="completed">Completadas</option>
      </select>
      <select id="filterPriority" onChange={handleChange}>
        <option value="normal">Normal</option>
        <option value="high">Alta</option>
        <option value="low">Baja</option>
      </select>
    </div>
  );
};

export default FilterBar;
