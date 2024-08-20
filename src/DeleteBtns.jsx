import React from 'react'

export default function DeleteBtns({deleteDone,deleteAll}) {
  return (
    <div className="flex justify-between gap-10">
        <button onClick={deleteDone} className="bg-red-600  w-[50%] rounded-md text-center p-1 text-white">
          Delete Done Tasks
        </button>
        <button onClick={deleteAll} className="bg-red-600 w-[50%] rounded-md text-center p-1 text-white">
          Delete All Tasks
        </button>
      </div>
  )
}
