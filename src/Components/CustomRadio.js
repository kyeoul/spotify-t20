import React from 'react'

function CustomRadio({name}) {
  return (
    <div className="relative w-6/12 h-10 flex flex-row items-center justify-end hover:cursor-pointer">
        <div className="absolute w-full h-5 bg-slate-600 z-1">
            
        </div>
        <div className="absolute z-2 text-4xl right-3 bottom-1">
            {name}
        </div>
    </div>
  )
}

export default CustomRadio