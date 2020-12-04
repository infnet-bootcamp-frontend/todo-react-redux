import {
  getTasksService,
  putTasksService,
  addTaskService,
  removeTaskService,
} from "../../services/todoService";

// methodo  da action para obter os dados da lista através de um serviço externo
export const getAllTasks = () => {
  return async (dispatch) => {
    const res = await getTasksService();
    dispatch({
      type: "GET_ALL_TASKS",
      data: res.data,
    });
  };
};
export const checkedTask = (todo, i) => {
  return async (dispatch) => {
    const todoMudado = {
      ...todo,
      done: !todo.done,
    };

    await putTasksService(todo.id, todoMudado);
    dispatch({
      type: "UPDATE_TASK",
      data: todoMudado,
      index: i,
    });
  };
};

export const addTask = (form) => {
  return async (dispatch) => {
    await addTaskService(form);
    dispatch({ type: "CREATE_TASK", data: form });
  };
};

export const removeTask = (todo) => {
  return async (dispatch) => {
    await removeTaskService(todo.id);
  };
};
