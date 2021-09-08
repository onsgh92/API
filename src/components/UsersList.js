import axios from 'axios'
import { useState,useEffect } from 'react'
import UsersCard from './UsersCard'
const UsersList = () => {
    const [users, setUsers] = useState([] )
    const getUsers = () =>{ 
  axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
      
  console.log(response)
  setUsers(response.data)
}).catch(error=>{console.log(error)})
 
    }


useEffect(() => {
   getUsers()
}, [])



    return (

        <div>
            <h1>this the users list</h1>
            {users.map((user,key)=> <UsersCard user={user} key={user.id} />)}
        </div>
    )
}

export default UsersList
