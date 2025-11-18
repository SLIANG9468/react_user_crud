import React from 'react'
import { useState } from 'react'
import './MechanicForm.css'

const MechanicForm = ({ submitFunction, initialData = null, isUpdate = false, hideButton = false }) => {
    const defaultFormData = {
        first_name: '',
        last_name:'',
        email:'',
        password:'',
        salary:'',
        address:''
    };

    // Merge initialData with defaults, ensuring no null values
    const initialFormData = initialData 
        ? Object.keys(defaultFormData).reduce((acc, key) => {
            acc[key] = initialData[key] ?? defaultFormData[key];
            return acc;
          }, {})
        : defaultFormData;

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) =>{
        const { name, value } = event.target
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      submitFunction(formData);
    }

  return (
    <div className="mechanic-form-container">
      <h2>{isUpdate ? 'Profile' : 'Mechanic Registration'}</h2>
      <form id="mechanic-form" onSubmit={(e)=>handleSubmit(e)} className="mechanic-form">
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name *</label>
            <input 
              type="text" 
              id="first_name"
              name='first_name' 
              placeholder='Enter first name' 
              onChange={(e)=>handleChange(e)} 
              value={formData.first_name}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name *</label>
            <input 
              type="text" 
              id="last_name"
              name='last_name' 
              placeholder='Enter last name' 
              onChange={(e)=>handleChange(e)} 
              value={formData.last_name}
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input 
            type="email" 
            id="email"
            name='email' 
            placeholder='Enter email address' 
            onChange={(e)=>handleChange(e)} 
            value={formData.email}
            required 
            disabled={isUpdate}
          />
        </div>

        {!isUpdate && (
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input 
              type="password" 
              id="password"
              name='password' 
              placeholder='Enter password' 
              onChange={(e)=>handleChange(e)} 
              value={formData.password}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="salary"> Salary</label>
          <input 
            type="text" 
            id="salary"
            name='salary' 
            placeholder='Enter salary (optional)' 
            onChange={(e)=>handleChange(e)} 
            value={formData.salary}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address"
              name='address' 
              placeholder='Enter address (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.address}
            />
          </div>

        </div>

        {!hideButton && (
          <button type='submit' className="submit-button">
            {isUpdate ? 'Update' : 'Register'}
          </button>
        )}
      </form>
    </div>
  )
}

export default MechanicForm