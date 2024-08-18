import React from 'react'

export default function DeleteBtns() {
  return (
    <div className="flex justify-between gap-10">
        <button className="bg-red-600  w-[50%] rounded-md text-center p-1 text-white">
          Delete Done Tasks
        </button>
        <button className="bg-red-600 w-[50%] rounded-md text-center p-1 text-white">
          Delete All Tasks
        </button>
      </div>
  )
}
