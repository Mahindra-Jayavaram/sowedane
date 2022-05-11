import { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from  "react-router-dom";
import { userLogin } from "../Redux/login/action";
// import axios from "axios";


export const Login = ()=>{
    const [userData, setUserData] = useState({
        email : "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email, password} = userData;


    const { loading, err, token } = useSelector((state) =>({
        loading : state.login.isLoading,
        err : state.login.err,
        token : state.login.token,
    }));

    console.log(loading,err,token);
    const handleChange = (e)=>{
        const {name,value} = e.target;

        setUserData({
            ...userData,
            [name] : value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // fetch("http://localhost:1342/login",{
        //     method: "POST",
        //     body : JSON.stringify(userData),
        //     headers :{
        //         "Content-Type" : "application/json"
        //     }
        // }).then((res)=>{
        //     return res = res.json();
        // }).then((res)=>{
        //     console.log(res);
        // })
        dispatch(userLogin(userData));
    }

    useEffect(()=>{
        if(token) navigate("/")
    })
    return loading ? (<h1>...Loading</h1>) : err ? (<h1>...Something went wrong</h1>) : (
        <>
        <div style={{
            width:"30%",
            margin : "auto",
        }}>
            <h1>LOGIN</h1>
        <form>
        <TextField
          label="Enter Your Email"
          id="outlined-size-normal"
          variant="outlined"
     
        name = "email"
        onChange={(e) => handleChange(e)}
        value={email}
        style={{width:"100%"}}
        />
        <br /> <br />
        <TextField
          label="password"
          id="outlined-size-normal"
          variant="outlined"
     
        onChange={(e) => handleChange(e)}
        name = "password"
        value={password}
        style={{width:"100%"}}
        />
        <br/>
        <br/>
        <button type='submit' style={{
          width : "100%",
          height : "50px",
          background : "black",
          border : "1px solid black",
          color : "white",
          fontWeight : "bold",
          margin : "auto"
      }} onClick={handleSubmit}> Submit </button>
        </form>
        </div>
        </>
    )
}