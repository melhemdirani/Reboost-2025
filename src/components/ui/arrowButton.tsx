import React from 'react'

function ArrowButton({text}: {text?: string}) {
  return (
    <button className=" bg-white cursor-pointer flex items-center justify-between text-black rounded-[96px] h-[54px] px-8 md:px-12 shadow-[0px_10px_20px_#0000001a] w-full md:w-auto group">
      <span className="font-normal text-lg leading-9 font-['Inter',Helvetica]">
      {text}
      </span>
      <img className="w-[15px] h-3 ml-2 transition-transform duration-600 ease-in-out group-hover:translate-x-3" alt="Arrow" src="/group-1.png" />
    </button>
  )
}

export default ArrowButton