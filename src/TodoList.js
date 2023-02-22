import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { NewTask } from "./App";

const TodoList = () => {
  const ctxTask = useContext(NewTask);

  const handleClick = (id) => {
    const newTask = ctxTask.task;
    for (let i = 0; i < newTask.length; i++) {
      if (newTask[i].id === id) {
        newTask[i].check = !newTask[i].check;
      }
    }
    ctxTask.setTask([...newTask]);
  };
  return (
    <div className="todo-list-container">
      {ctxTask.task.map((item) => {
        return item.check == true ? (
          <div className="todo-item-container">
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => handleClick(item.id)}
            />
            <div className="item-title">{item.name}</div>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        ) : ctxTask.show == true ? (
          <div className="todo-item-container done">
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => handleClick(item.id)}
            />
            <div className="item-title">{item.name}</div>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default TodoList;