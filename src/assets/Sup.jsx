import React, { useState } from 'react'

export default function Sup() {
    const[Subtract,SetSubtract]=useState(1000)
  return (
    <div class="flex flex-col  border-4 border-gray-400 w-3/12">
        <h1 class="border-2 border-blue-500 p-2 bg-blue-600 text-white text-3xl text-center">1000</h1>
        <div class="flex justify-evenly bg-blue-500 text-white text-2xl">

        
        <button class="p-2 border-white border-2 rounded">
            {Subtract}
        </button>
        <button class="hover:text-6xl" onClick={()=>{
            SetSubtract(Subtract - 1)
        }}>
            -
        </button>


    </div>
    </div>
  )
}
