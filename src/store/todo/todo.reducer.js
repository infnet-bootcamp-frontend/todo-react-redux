const INITIAL_STATE = {
  all: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_TASKS":
      state.all = action.data;
      return state;
    case "UPDATE_TASK":
      state.all[action.index] = action.data;
      return state;
    default:
      return state;
  }
};

export default reducer;
