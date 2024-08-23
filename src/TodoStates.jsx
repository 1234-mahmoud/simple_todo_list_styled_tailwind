import React, { useState } from "react";
export default function TodoStates({ toggleCheck, check, task, del }) {
  const [editbtn, setEditbtn] = useState(false);
  const [editingTxt, setEditingTxt] = useState(task);

  const handleEditBtn = () => {
    setEditbtn(true);
  };

  const handleChange_ = (e) => {
    setEditingTxt(e.target.value);
  };

  const handleSave = () => {
    setEditbtn(false);
  };
  return (
    <div className="">
      <div className=" flex justify-between items-center gap-3 border-solid border-stone-300 border-2 mx-auto my-10 p-5 rounded-md">
        {editbtn ? (
          <div className="">
            <input
              type="text"
              className="w-full border-2 border-stone-400 border-solid rounded-md"
              value={editingTxt}
              onChange={handleChange_}
            />
            <button
              className="mx-6 my-3 bg-green-600 rounded-md task-center  px-5 py-1 text-white text-center"
              onClick={handleSave}
            >
              save
            </button>
          </div>
        ) : (
          <p className={check ? "line-through" : "no-underline"}>{editingTxt}</p>
        )}
        <div className="flex gap-3 justify-center items-center">
          <input
            onChange={toggleCheck}
            checked={check}
            type="checkbox"
            name=""
            id=""
            className={`w-4 h-4 text-green-600 accent-green-600 rounded border-gray-300 focus:ring-green-500`}
          />
          <svg
            className="h-5 w-5 text-yellow-600 cursor-pointer"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleEditBtn}
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>

          <svg
            className="h-5 w-5 text-red-500 cursor-pointer"
            viewBox="0 0 24 24"
            fill="red"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={del}
          >
            {" "}
            <polyline points="3 6 5 6 21 6" />{" "}
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
