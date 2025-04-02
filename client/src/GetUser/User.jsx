import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                setUsers(response.data) 
            } catch (error) {
                console.log("Error while Fetching Data", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="userTable">
            <button type="button" className="btn btn-primary">
                Add User <i className="fa-solid fa-user-plus"></i>
            </button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id || index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td className='actionButton'>
                                <button type="button" className="btn btn-info">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" className="btn btn-danger">
                                    <i className="fa-solid fa-trash"></i>
                                </button>  
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User
