import React, { useState } from 'react';
import './AddUser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
    const users = {
      name: "",
      email: "",
      address: "",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
  
    const inputHandler = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
  
      setUser({ ...user, [name]: value });
    };
  
    const submitForm = async (e) => {
      e.preventDefault();
      await axios
        .post("http://localhost:8000/api/user", user)
        .then((response) => {
          toast.success(response.data.message, { position: "top-right" });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    return (
        <div className='AddUser'>
            <Link to="/" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back 
            </Link>
            <h4>Add New User</h4>
            <form className="AddUserForm" onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name : </label>
                    <input
                        type='text'
                        id='name'
                        onChange={inputHandler}
                        name='name'
                        value={user.name}
                        autoComplete='off'
                        placeholder='Enter Your Name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>E-mail : </label>
                    <input
                        type='email'
                        id='email'
                        onChange={inputHandler}
                        name='email'
                        value={user.email}
                        autoComplete='off'
                        placeholder='Enter Your Email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='address'>Address : </label>
                    <input
                        type='text'
                        id='address'
                        onChange={inputHandler}
                        name='address'
                        value={user.address}
                        autoComplete='off'
                        placeholder='Enter Your Address'
                    />
                </div>
                <div className='inputGroup'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;