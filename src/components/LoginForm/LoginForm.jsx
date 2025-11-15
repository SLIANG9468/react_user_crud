import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [ email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        console.log(`PASSING ${email} and {password} to login`)
        event.preventDefault();
        await LoginForm(email, password);
        navigate('/');
    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={email}
            placeholder='Email'
            type='email'
            onChange={(e)=>setEmail(e.target.value)}/>
            <input value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type='password'/>
            <button type='submit'> Submit</button>
        </form>
        <p>Don't have an account? <Link to ='register'>Sign Up here</Link></p>
    </div>
  )
}
