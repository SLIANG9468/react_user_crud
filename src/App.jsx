import NavBar from "./components/NavBar/NavBar"
import LoginView from "./views/LoginView/LoginView"
import MechanicView from "./views/MechanicView/MechanicView"
import RegisterMechanicView from "./views/RegisterMechanic/RegisterMechanicView"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element = {< MechanicView/>} />
          <Route path = '/login' element = {< LoginView />} />
          <Route path='/register' element={<RegisterMechanicView/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
