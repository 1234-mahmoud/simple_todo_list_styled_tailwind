import React, { useRef, useState } from "react";
import TodoStates from "./TodoStates";
import DeleteBtns from './DeleteBtns';
export default function Todo() {
  const [task, setTask] = useState([]);
  // const [completed,setCompleted]=useState(false)
  const inputRef = useRef();

  //function to add tasks
  const AddTask = () => {
    if (inputRef.current.value) {
      setTask([
        ...task,
        {
          id: Math.random(),
          val: inputRef.current.value,
          completed: false,
        },
      ]);
      inputRef.current.value = "";
    }
  };

  //function of toggling done tasks
  const toggleCheck = (todo) => {
    setTask(
      task.map((item) => {
        if (item.id === todo) {
          return { ...item, completed: !item.completed};
        }
        return item;
      })
    );
  };

  //function to delete single tasks
  const handleDelete = (id) => {
    const filterdItems = task.filter((item) => item.id !== id);
    //return a new array with all items with id != the selected item id
    setTask(filterdItems);
  };


  return (
    <>
      <div className="border-solid border-stone-300 border-2 w-full m-auto p-5 rounded-md">
        <div className="flex m-0 gap-0 bg-cyan-600 rounded-md">
          <svg
            className="h-6 w-6 text-white m-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>

          <input
            type="task"
            className="w-full rounded-r-md px-2 focus:outline-none border-stone-300 border-2 rounded-md rounded-l-none border-l-0"
            placeholder="New Todo"
            ref={inputRef}
          />
        </div>

        <button
          onClick={AddTask}
          className="bg-cyan-600 rounded-md text-center my-6 w-full p-1 text-white"
        >
          Add New Task
        </button>
      </div>

      <>
        <h1 className="text-2xl font-bold">TodoList</h1>
        {
  task.length >0?<DeleteBtns />:''

}
        {task.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoStates
              toggleCheck={() => toggleCheck(todo.id)}
              task={todo.val}
              check={todo.completed}
              del={() => handleDelete(todo.id)}

            />
          </div>
        ))}

      </>
    </>
  );
}
