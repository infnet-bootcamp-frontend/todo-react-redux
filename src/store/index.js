const { createStore, combineReducers, applyMiddleware } = require("redux");

import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todo/todo.reducer";

// Combinar todos os reducer de cada modulo
const reducers = combineReducers({
  todos: todoReducer,
});

// add middlewares

const middlewares = [];

// incluir ferramentas
const compose = composeWithDevTools(applyMiddleware(...middlewares));

// criar store
const store = createStore(reducers, compose);

export default store;
