import React, { createContext, useContext, useState, useEffect } from "react";

//creating the auth context
const AuthContext = createContext();

//create hook to consume context (give access to context variables)
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

const API_URL = import.meta.env.VITE_API_URL

//Create the Context Provider (wrapper that I will place over my app)
export const AuthProvider = ({ children }) =>{
    const [mechanic, setMechanic] = useState(localStorage.getItem('mechanic') ? JSON.parse(localStorage.getItem('mechanic')) : null) //Mechanic will be an object in JSON
    const [token, setToken] =useState(localStorage.getItem('token') || null)

    //Grab already logged in mechanic
    useEffect(()=> {
        const savedToken = localStorage.getItem('token')
        const savedMechanic = localStorage.getItem('mechanic')
        setToken(savedToken)
        const mechanicData = JSON.parse(savedMechanic)
        setMechanic(mechanicData) //parsing JSON object from the LS, and setting the object to our Mechanic
    },[])

    //login function
    const login = async (email, password) =>{
        console.log('API_URL:', API_URL);
        console.log('Full login URL:', API_URL + '/mechanics/login');
        console.log('Request body:', { email, password });
        
        const response = await fetch(API_URL + '/mechanics/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        console.log('Response status:', response.status);
        const data = await response.json() // translating to js

        console.log(data)
        if ('error' in data){ // checking the login response for an error from my backend
            return { success: false, error: data.error }
        }
        
        if (!response.ok){
            console.error('There was an issue logging in.')
            return { success: false, error: 'Login failed' }
        }
        
        setMechanic(data.mechanic)
        setToken(data.token)
        localStorage.setItem('mechanic', JSON.stringify(data.mechanic))
        localStorage.setItem('token', data.token)
        return { success: true, token: data.token }
    }

    const logout = () => {
        setToken(null) //clearing saved tokens
        setMechanic(null)
        localStorage.removeItem('token') //potentially want to clear entire ls
        localStorage.removeItem('mechanic')
    }

    //Register Mechanic Function
    const registerMechanic = async (registerData) => {
        console.log( registerData);

        const response = await fetch('http://127.0.0.1:5000/mechanics',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })

        const responseData = await response.json()
        console.log(responseData)
        
        if (response.ok) {
            const loginSuccess = await login(registerData.email, registerData.password)
            return { success: true }
        }
        
        return { success: false, error: responseData.error || 'Registration failed' }
    }

    //Update Mechanic Function
    const updateMechanic = (updatedMechanicData) => {
        setMechanic(updatedMechanicData)
        localStorage.setItem('mechanic', JSON.stringify(updatedMechanicData))
    }

    const value = {
        token,
        mechanic,
        login,
        logout,
        registerMechanic, 
        updateMechanic,
        isAuthenticated: token ? true : false
    }
        
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}