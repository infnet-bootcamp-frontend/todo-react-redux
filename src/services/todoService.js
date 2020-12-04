import axios from "axios";

const url = "http://localhost:3001";

export const getTasksService = () => axios.get(url + "/todos");

export const putTasksService = (id, data) =>
  axios.put(`${url}/todos/${id}`, data);

export const addTaskService = (data) => axios.post(`${url}/todos`, data);

export const removeTaskService = (id) => axios.delete(`${url}/todos/${id}`);
