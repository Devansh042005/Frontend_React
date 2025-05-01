import React from 'react'

function MiniProj1 ({data , handleClick , index}) {

    const {image , artist, added , name} = data; // destructuring data object into individual variables.
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-20'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'>
        <img className='w-full h-full object-cover overflow-hidden' src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='text-xl font-semibold leading-none'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button onClick={() => handleClick(index)} className='px-4 py-3 whitespace-nowrap bg-orange-600 absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-sm rounded-full'>{added === false? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default MiniProj1;
