import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import './Employee.css';
import { STATUSES } from "../../../Store/applicantSlice";
import { fetchApplicants } from "../../../Store/applicantSlice";
import { useDispatch, useSelector } from "react-redux";
import FileDownload from "js-file-download"
import { add } from '../../../Store/employeeSlice'
import { removeApplicant } from "../../../Store/applicantSlice";

function ViewJobApplicant() {
  
  const dispatch = useDispatch();
  const { data: Applicant, status } = useSelector((state) => state.applicants);
  const [app, setApp] = useState(Applicant)
  const handleJobs=(e)=>{
    // e.preventDefault();
    dispatch(fetchApplicants());
    setApp(Applicant)
  }
  const handleShortlist = (id) => {
    // e.preventDefault();
    alert("mail sent to id " + id)
    console.log("shortlist button clicked");
  }
  const handleReject = (id) => {
    // e.preventDefault();
    alert(id + " is Rejected")
    // dispatch(removeApplicant(id))
    const newData= app.filter((item)=>item._id!==id)
    setApp(newData)
  }
  const handleResume = (e) => {
    e.preventDefault()
    axios('http://localhost:9000/download', {
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        FileDownload(response.data, "Resume.pdf")
      })
      .catch((error) => {
        console.log(error);

      });

  };
  const handleAccept = (id) => {
    alert(id._id + " is Accepted");
    dispatch(add(id))
    const newData= app.filter((item)=>item._id!==id._id)
    setApp(newData)
  };
  return (
    <div>
      <AdminNav />
      <h1>Applications</h1>
      <button className="btn btn-success" onClick={(e)=>handleJobs(e)}>All Applicants</button>
      {
        app? app.map((item) => (
          <div className=' shadow-lg mb-3 col mx-3 my-1 p-2 d-flex gap-1'>
            <div className='col-3 bg-info'>
              <img style={{ width: '83%', height: "82%" }} className='my-4 align-items-center rounded-circle' src="https://www.gstatic.com/webp/gallery/1.sm.jpg" alt="image not found"></img>
            </div>
            <div className='col-6 bg-warning'>
              <h1 className='d-flex m-1 p-1'>Name: {item.name}</h1>
              <h2 className='d-flex m-1 p-1'>Email:{item.email}</h2>
              <h2 className='d-flex m-1 p-1'>Job: {item.title}</h2>
            </div>
            <div className='col-3 bg-dark'>
              <button onClick={(e) => handleResume(e)} style={{ width: '90%', height: '20%' }} className='my-2 p-3 btn btn-primary'>Download Resume</button>
              <div className='h-50'>
                <button onClick={() => handleShortlist(item._id)} style={{ width: '45%', height: '80%' }} className='my-2 mx-1 p-3 btn btn-warning'>Shortlist</button>
                <button onClick={() => handleReject(item._id)} style={{ width: '45%', height: '80%' }} className='my-2 mx-1 p-3 btn btn-danger'>Reject</button>
              </div>
              <button onClick={() => handleAccept(item)} style={{ width: '90%', height: '20%' }} className='my-2 p-3 btn btn-success'>Accept</button>
            </div>
          </div>
        )): "No Data"
      }
    </div>
  )
}


export default ViewJobApplicant;
