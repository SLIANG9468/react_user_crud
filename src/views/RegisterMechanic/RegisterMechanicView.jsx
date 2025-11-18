import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import MechanicForm from '../../components/MechanicForm/MechanicForm'
import './RegisterMechanicView.css'

const RegisterMechanicView = () => {
  const { registerMechanic } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (formData) => {
    setError(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success messages
    const result = await registerMechanic(formData);
    if (result.success) {
      if (result.message) {
        console.log(result)
        
        setSuccessMessage(result.message);
      }
      navigate('/');
    } else {
      setError(result.error);
    }
  }
  
  return (
    <div className="register-mechanic-view">
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      <MechanicForm submitFunction={handleRegister} />
    </div>
  )
}

export default RegisterMechanicView