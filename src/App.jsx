import React from "react";
import Todo from "./Todo";
import ControlBtns from './ControlBtns';
// import DeleteBtns from './DeleteBtns';

export default function App() {
  return (
    <div className="w-[80%] mx-auto my-10 p-6 rounded-sm  flex justify-center flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">TodoInput</h1>
      {/* <ControlBtns/> */}
      <Todo />
      {/* <DeleteBtns/> */}
      
    </div>
  );
}
