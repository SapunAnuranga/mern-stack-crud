import React from 'react';
import './AddUser.css';
import { Link } from 'react-router-dom';

const AddUser = () => {
    

    return (
        <div className='AddUser'>
            <Link to="/" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back 
            </Link>
            <h4>Add New User</h4>
            <form className="AddUserForm">
                <div className='inputGroup'>
                    <label htmlFor='name'>Name : </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        autoComplete='off'
                        placeholder='Enter Your Name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>E-mail : </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        autoComplete='off'
                        placeholder='Enter Your Email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='address'>Address : </label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        autoComplete='off'
                        placeholder='Enter Your Address'
                    />
                </div>
                <div className='inputGroup'>
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;