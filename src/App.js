import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Header from "./Header";
export const NewTask = createContext();


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

const Home = () => {
  const [show, setShow] = useState(true);

  const [task, setTask] = useState([
    { id: 1, name: "Build some websites", check: true },
    { id: 2, name: "Lau Nhà ", check: true },
    { id: 3, name: "Rửa bát", check: true },
    { id: 4, name: "Do excercises", check: true }
  ]);

  if (!JSON.parse(localStorage.getItem("listTask"))) {
    localStorage.setItem("listTask", JSON.stringify([...task]));
  }

  return (
    <NewTask.Provider
      value={{ task: task, setTask: setTask, show: show, setShow: setShow }}
    >
      <div className="App">
        <div className="container">
          <TodoListHeader />
          <TodoList />
          <Form />
        </div>
        <Footer />
      </div>
    </NewTask.Provider>
  );
};
