import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { NewTask } from "./App";

const Header = () => {
  const ctxTask = useContext(NewTask);
  let a = 0;
  const newListTask = ctxTask.task;
  for (let i = 0; i < newListTask.length; i++) {
    if (newListTask[i].check == true) {
      a = a + 1;
    }
  }

  const handleCheckBoxClick = () => {
    ctxTask.setShow(!ctxTask.show);
  };

  return (
    <div>
      <div className="header">
        <span className="active1">Tất cả các việc  {a} ! </span>
        <span className="active"> Việc chưa hoàn thành </span>
        <FaRegCircle
          className="item-done-button"
          onClick={handleCheckBoxClick}
        />
        {" "}
      </div>
    </div>
  );
};

export default Header;
