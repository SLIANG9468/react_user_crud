import React from 'react'
import { useState } from 'react'

export const UserForm = () => {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname: '',
        email:'',
        password:'',
        address:''
    })

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData(prevData =>({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitFunction(formData);
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='firstname' name='firstname' placeholder='firstname' onChange={(e)=>handleChange(e)} value={formData.firstname}/>
            <input type='lastname' name='lastname' placeholder='lastname' onChange={(e)=>handleChange(e)} value={formData.lastname}/>
            <input type='email' name='email' placeholder='email' onChange={(e)=>handleChange(e)} value={formData.email}/>
            <input type='password' name='password' placeholder='password' onChange={(e)=>handleChange(e)} value={formData.password}/>
            <input type='address' name='address' placeholder='address' onChange={(e)=>handleChange(e)} value={formData.address}/>
        </form>
    </div>
  )
}
