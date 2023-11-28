import React from 'react'
import { useEffect, useState } from 'react'
import { getUserData } from '../services/api'


const Users = () => {

    useEffect(()=>{
        getUsersDetails()
    },[])


    const [users, setusers]= useState([])


    const getUsersDetails = async ()=>{
        const response = await getUserData()
        setusers(response.data)
       
    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>UserName</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>(

            
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
            ))
          }
      
        </tbody>
      </table>
    </div>
  );
}

export default Users
