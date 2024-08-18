import React from 'react'

export default function ControlBtns() {
  return (
    <div className="mx-auto  grid grid-cols-3 justify-center items-center gap-7 -m-4">
    <button className="bg-cyan-600 w-[100%] rounded-md text-center my-6 p-1 text-white ">
      All
    </button>
    <button className="bg-cyan-600 w-[100%] rounded-md text-center my-6 p-1 text-white ">
      Done
    </button>
    <button className="bg-cyan-600 w-[100%] rounded-md text-center my-6 p-1 text-white ">
      Todo
    </button>
  </div>
  )
}
