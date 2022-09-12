import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../../CSS/AdminDashboard.css"
function AdminDashboard(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    useEffect(()=>{
        const userid = localStorage.getItem('userId');
        console.log("userid",userid);
        axios.post('http://localhost:9000/profile',{userid})
        .then((res)=>{
            console.log("res from profile = ",res.data);
            setName(res.data.name);
            setEmail(res.data.email)
        })
        .catch((err)=>{
            console.log("err from profile",err);
        })
    },[])
    return(
        <div>
            <AdminNav></AdminNav>

<h3> Welcome {name}</h3>
<h3>Email: {email}</h3>
  

<img src="https://t3.ftcdn.net/jpg/02/33/12/44/240_F_233124436_78mVMPy74gldjeo6rdyJgRklPIGSAwl7.jpg" className="pic-admin thumbnail" alt="..."/>
<h1 className='background-text-2 text'>Hire character. Train skill </h1>
<h2 className='background-text-2 text'>It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do</h2>
<div className="admin-colour-container">
    <h2 className="admin-text">Acquiring the right talent is the most important key to growth. Hiring was — and still is — the most important thing we do</h2><div className="container-admin">
<img src="https://t4.ftcdn.net/jpg/04/96/27/97/240_F_496279754_N7gxd0CWlsLn952lCWHnss3TrA1s90b2.jpg" class="pic-admin thumbnail" alt="..."/>

<button className="btn"><Link className="link-admin" to="/addjobs">Post Job</Link></button>

</div>
</div>

<div className="admin-colour-container two">
    <h2 className="admin-text">The most dangerous leadership myth is that leaders are born-that there is a genetic factor to leadership. That’s nonsense; in fact, the opposite is true. Leaders are made rather than born.</h2><div className="container-admin c-2">
<img src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?size=626&ext=jpg&ga=GA1.2.1034677208.1662904499" class="thumbnail " alt="..."/>

</div>
</div>
</div>

    )
}
export default AdminDashboard