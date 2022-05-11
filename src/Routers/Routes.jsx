import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { Signup } from "../components/Signup";
import { Login } from "../components/Login";
import { Edit } from "../components/Edit";


export const AllRoutes= ()=>{

    return <>
        <Navbar/>

        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/edit" element={<Edit/>} />
      </Routes>
    
    </>
}