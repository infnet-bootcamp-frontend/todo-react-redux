import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllTasks, checkedTask } from "./store/todo/todo.action";

function App() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todos.all);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllTasks());
    setUpdate(false);
  }, [dispatch, update]);

  const checkedHandle = (todo, i) => {
    dispatch(checkedTask(todo, i));
    setUpdate(true);
  };

  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span className="addBtn">Add</span>
      </div>

      <ul id="myUL">
        {todoState.map((todo, index) => (
          <li
            onClick={() => checkedHandle(todo, index)}
            key={todo.id}
            className={todo.done ? "checked" : ""}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
