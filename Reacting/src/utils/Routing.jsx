import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
      <Route path="/user" element = {<User />}/>

    </Routes>
    </div>
  )
}

export default Routing
