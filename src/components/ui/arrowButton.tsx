import React from 'react';

function ArrowButton({ text }: { text?: string }) {
  return (
    <button className=' bg-white cursor-pointer flex items-center justify-between text-black rounded-[96px] h-[44px] md:h-[54px] px-4 sm:px-6 md:px-12 shadow-[0px_10px_20px_#0000001a] w-full sm:w-auto md:w-auto group'>
      <span className="font-normal text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-9 font-['Inter',Helvetica]">
        {text}
      </span>
      <img
        className='w-[12px] sm:w-[14px] md:w-[15px] h-[10px] sm:h-[11px] md:h-3 ml-1 sm:ml-2 transition-transform duration-600 ease-in-out group-hover:translate-x-3'
        alt='Arrow'
        src='/group-1.png'
      />
    </button>
  );
}

export default ArrowButton;
