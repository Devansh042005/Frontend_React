import React, { useEffect } from 'react'

const Services = () => {

    useEffect(() => {
        console.log("Services Component Mounted")
        return() => {
            console.log("Services Component Unmounted")
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Services
