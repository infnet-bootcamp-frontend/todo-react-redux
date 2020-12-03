import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todo/todo.reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

// Combinar todos os reducer de cada modulo
const reducers = combineReducers({
  todos: todoReducer,
});

// add middlewares
const middlewares = [thunk];

// incluir ferramentas
const compose = composeWithDevTools(applyMiddleware(...middlewares));

// criar store
const store = createStore(reducers, compose);

export default store;
