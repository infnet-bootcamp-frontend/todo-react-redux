import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getAllTasks,
  checkedTask,
  addTask,
  removeTask,
} from "./store/todo/todo.action";

function App() {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [form, setForm] = useState({
    done: false,
  });

  const todoState = useSelector((state) => state.todos.all); // listener, que um carinha que fica escutando a mudança do estado

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const add = (event) => {
    event.preventDefault();

    if (todoState.some((el) => el.title === form.title)) {
      alert("Já existe uma tarefa cadastrada");
    } else {
      dispatch(addTask(form));
      setUpdate(true);
      // alert(`Tarefa ${form.title} cadastrada com sucesso`);
      setForm({});
    }
  };
  const remove = (todo) => {
    if (!todo.done) {
      dispatch(removeTask(todo));
      setUpdate(true);
    } else {
      alert(`Somente é possível remover tarefas que não foram feitas`);
    }
  };

  useEffect(() => {
    dispatch(getAllTasks()); // faz um dispatch para action, com objetivo de obter os dados da lista
    setUpdate(false);
  }, [dispatch, update]);

  const checkedHandle = (todo, i) => {
    dispatch(checkedTask(todo, i));
    setUpdate(true);
  };

  const sortTodos = todoState.sort(function (a, b) {
    if (a.done > b.done) {
      return 1;
    }
    if (a.done < b.done) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={form.title || ""}
          placeholder="Title..."
        />
        <button disabled={!form.title} className="addBtn" onClick={add}>
          Add
        </button>
      </div>

      <ul id="myUL">
        {sortTodos.map((todo, index) => (
          <li key={todo.id} className={todo.done ? "checked" : ""}>
            {todo.title}
            {!todo.done ? (
              <span onClick={() => remove(todo)}>Remove</span>
            ) : null}
            <span>
              <button onClick={() => checkedHandle(todo, index)}>
                {todo.done ? "Abrir a tarefa" : "Fechar a tarega"}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
