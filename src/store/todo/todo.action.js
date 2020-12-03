import { getTasksService, putTasksService } from "../../services/todoService";

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
    // const todoMudado = todo;
    // todoMudado.done = !todo.done;

    const todoMudado = {
      ...todo,
      done: !todo.done,
    };

    const res = await putTasksService(todo.id, todoMudado);
    dispatch({
      type: "UPDATE_TASK",
      data: todoMudado,
      index: i,
    });
  };
};
