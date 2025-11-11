import EmployeeHome from "./employee/EmployeeHome.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/emp_mgmt_mern" element={<Login/>}></Route>
        <Route path="/employee/*" element={<EmployeeHome/>}></Route>

      </Routes>
      
      </BrowserRouter>

      
    </>
  )
}

export default App
