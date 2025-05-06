import React from 'react'
import Card1 from './Card1'

function Cards ({users, handleRemove})  {
  return (
    <div className='w-full max-h-96 overflow-auto flex justify-center flex-wrap gap-4 p-4 '>
        {users.map((item, index) => {
          return <Card1 handleRemove = {handleRemove} id = {index} user = {item} key={index}  />
        })}
        
    </div>
  )
}

export default Cards
