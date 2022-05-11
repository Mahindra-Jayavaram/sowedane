// import { useEffect, useState } from "react";
// import axios from "axios";
import { useSelector } from "react-redux";

export const Home = ()=>{
    // const [users, setUsers ] = useState([])

    const {user} = useSelector(store => store.user)

    console.log("user:", user);

    return <>
    <h1>Home Page</h1>
        <p>User Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Mobile No: {user.mblNo}</p>
    </>
}