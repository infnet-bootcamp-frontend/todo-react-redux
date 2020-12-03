import { getTasksService } from "../../services/todoService";

export const getAllTasks = () => {
  return async (dispatch) => {
    const res = await getTasksService();
    
    
    dispatch({
      type: "GET_ALL_TASKS",
      data: res.data,
    });
  };
};
