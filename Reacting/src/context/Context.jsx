import React, { createContext } from 'react'

export const UserContext = createContext();

const Context = (props) => {
    const [users, setusers] = useState([
        {id:0, username: "John", city: "USA"},
        {id:1, username: "Krishna", city: "India"},
        {id:2, username: "Julie", city: "Canada"},
    ])
  return (
    <UserContext.Provider value={[users, setusers]}>{props.children}</UserContext.Provider>
  )
}

export default Context
