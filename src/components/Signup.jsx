import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Password } from './Password';
import TextField from '@material-ui/core/TextField';
// import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { newRegister } from "../Redux/registration/action";

export const Signup =()=> {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name : "",
        email: "",
        password : "",
        mblNo : ""
    });
const { isLoading, isError, isSuccess } = useSelector((state)=>({
    isLoading: state.register.isLoading,
    isError: state.register.isError,
    isSuccess: state.register.isSuccess,

}));
const dispatch = useDispatch()
const {name, email, password,mblNo} = userData;
const handleChange = (e)=>{
    const {name, value} = e.target;

    setUserData({
        ...userData,
        [name] : value,
    })
}

const handleSubmit = (e) =>{

    e.preventDefault();
    // axios.post("https://mahindrajayavaram.herokuapp.com/signup", userData).then(()=>{
    //     // alert("successfully")
    // });

    dispatch(newRegister(userData));
    navigate("/")

    
}
  return isLoading ? (
    <h1> ...Loading </h1>
  ) : isError ? (
    <h1>{isError}</h1>
  ) : (
  <>
    <form>
 
      <div style={{
          width : "20%",
          margin : "auto"
        }}>
          <h1>SIGN UP</h1>
        <TextField
          label="Enter Your Name"
          id="outlined-size-normal"
          variant="outlined"
          style={{
              width : "90%"
          }}
          name = "name"
          onChange={(e) => handleChange(e)}
          value = {name}
        />
        <br /><br />
        <TextField
          label="Enter Your Email"
          id="outlined-size-normal"
          variant="outlined"
          style={{
            width : "90%"
        }}
        name = "email"
        onChange={(e) => handleChange(e)}
        value={email}
        />
        <br /> <br />
        <TextField
          label="password"
          id="outlined-size-normal"
          variant="outlined"
          style={{
            width : "90%"
        }}
        onChange={(e) => handleChange(e)}
        name = "password"
        value={password}
        />
        <br /> 
        <br /> 

        <TextField
          label="Mobile"
          id="outlined-size-normal"
          variant="outlined"
          style={{
            width : "90%"
        }}
        onChange={(e) => handleChange(e)}
        name = "mblNo"
        value={mblNo}
        />
        <br />
        <br />
      <button type='submit' style={{
          width : "90%",
          height : "50px",
          background : "black",
          border : "1px solid black",
          color : "white",
          fontWeight : "bold"
      }} onClick={handleSubmit}> Submit </button>
      </div>
    </form>

    </>
  );
}
