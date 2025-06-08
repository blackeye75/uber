import React, { useState } from 'react'

export const UserContextData = React.createContext()

const UserContext = ({children}) => {
    const [user, setuser] = useState({
        fullname: {
            firstname: "",
            lastname: ""
        },
        email: "",
        password: ""
    })
  return (
    <UserContextData.Provider  value={{user,setuser}} >{children}</UserContextData.Provider>
  )
}

export default UserContext