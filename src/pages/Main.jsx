import React, { useState } from "react";
import "../data/Task.js";
import { addNewTask, getTaskList } from "../data/Task.js";

const list = getTaskList();

const Main = () => {
  console.log(list);

  const [dummy, setDummy] = useState([]);

  const addTask = () => {
    addNewTask("test2");
    setDummy([...dummy]);
  };

  return (
    <>
      <div>
        <div>
          <button className="m-4 p-4 text-2xl bg-blue-300" onClick={addTask}>
            new Task
          </button>
        </div>
        <div>
          <h2>ToDoリスト一覧</h2>
          <ul>
            {list.map((task) => {
              return <li>{task.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
