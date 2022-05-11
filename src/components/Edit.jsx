import React, { useDeferredValue, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/login/action';
import { patchUserData } from '../Redux/user/action';

export const Edit =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(store => store.user)
    console.log("editUser:", user);
    const {name,email,password,mblNo} = user;
    const [formData, setformData] = useState({
        name : user.name,
        email: user.email,
        mblNo : user.mblNo
    });
const handleChange = (e)=>{
    const {name, value} = e.target;
    console.log(name,value)
    setformData({
        ...formData,
        [e.target.name] : value,
    })
}
// const {user} = useSelector(store => store.user)
useEffect(()=>{
    
})

const handleEdit = (e) =>{
    dispatch(patchUserData({
        ...formData,
        id: user._id,
    }))
}
  return (
<>
      <div style={{
          width : "20%",
          margin : "auto"
        }}>
          <h1>EDIT HERE</h1> 
        <TextField
          label="Enter Your Name"
          id="outlined-size-normal"
          variant="outlined"
          style={{
              width : "90%"
          }}
          name = "name"
          onChange={(e) => handleChange(e)}
          value = {formData.name}
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
        value={formData.email}
        />
        <br /> <br />

        <TextField
          label="Mobile"
          id="outlined-size-normal"
          variant="outlined"
          style={{
            width : "90%"
        }}
        onChange={(e) => handleChange(e)}
        name = "mblNo"
        value={formData.mblNo}
        />
        <br />
        <br />
      <button type='submit' style={{
          width : "50%",
          height : "40px",
          background : "black",
          border : "1px solid black",
          color : "white",
          margin:"auto",
          marginLeft:"20%",
          fontWeight : "bold"
      }} onClick={handleEdit}> Edit </button>
      </div>

    </>
  );
}
