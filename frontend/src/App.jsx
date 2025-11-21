import { useState } from 'react';
import {ToastContainer} from "react-toastify";
import Login from './main_components/Login.jsx';
import Signup from './main_components/Signup.jsx';
// import Home from "./pages/Home.jsx"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import RefreshHandler from './main_components/RefreshHandler.jsx';
import EmployeeHome from "./employee/EmployeeHome.jsx";

function App() {

    const [isAuthenticated,setisAuthenticated]=useState(false);
    const PrivateRoute=({element})=>{
      return isAuthenticated ? element : <Navigate to="/" />
    }

  return (
    <>

      
      <BrowserRouter>
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
        <Routes>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path={"/employee/*"} element={<PrivateRoute element={<EmployeeHome/>}/>}></Route>
          {/* <Route path={"/home"} element={<Home/>}></Route>       */}
        </Routes>
      </BrowserRouter>

      <ToastContainer/>
    </>
  )
}

export default App
