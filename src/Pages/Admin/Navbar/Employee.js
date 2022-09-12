// import React, { Component, useEffect, useState } from "react";
// import axios from "axios";
// import AdminNav from "./AdminNav";
// import './Employee.css'
// import { fetchApplicants } from "../../../Store/applicantSlice";
// import { useDispatch, useSelector } from "react-redux";
// import FileDownload from "js-file-download"
// import { add } from '../../../Store/employeeSlice'
// import { removeApplicant } from "../../../Store/applicantSlice";

// function ViewJobApplicant() {
  
//   const dispatch = useDispatch();
//   const { data: Applicant, status } = useSelector((state) => state.applicants);
//   const [app, setApp] = useState(Applicant)
//   // useEffect(() => {
//   //   dispatch(fetchApplicants());
//   // }, [])
//   const handleJobs=(e)=>{
//     // e.preventDefault();
//     dispatch(fetchApplicants());
//     setApp(Applicant)
//   }
//   const handleShortlist = (id) => {
//     // e.preventDefault();
//     alert("mail sent to id " + id)
//     console.log("shortlist button clicked");
//   }
//   const handleReject = (id) => {
//     // e.preventDefault();
//     alert(id + " is Rejected")
//     // dispatch(removeApplicant(id))
//     const newData= app.filter((item)=>item._id!==id)
//     setApp(newData)
//   }
//   const handleResume = (e) => {
//     e.preventDefault()
//     axios('http://localhost:9000/download', {
//       method: "GET",
//       responseType: "blob",
//     })
//       .then((response) => {
//         FileDownload(response.data, "Resume.pdf")
//       })
//       .catch((error) => {
//         console.log(error);

//       });

//   };
//   const handleAccept = (id) => {
//     alert(id._id + " is Accepted");
//     dispatch(add(id))
//   };
//   // if (status === STATUSES.LOADING){
//   //   return <h2>LOADING....</h2>
//   // }
//   return (
//     <div>
//       <AdminNav />
//       <h1>Applications</h1>
//       <button className="btn btn-success" onClick={(e)=>handleJobs(e)}>All My Jobs</button>
//       {
//         app.map((item) => (
//           <div className=' shadow-lg mb-3 col mx-3 my-1 p-2 d-flex gap-1'>
//             <div className='col-3 bg-info'>
//               <img style={{ width: '83%', height: "82%" }} className='my-4 align-items-center rounded-circle' src="https://www.gstatic.com/webp/gallery/1.sm.jpg" alt="image not found"></img>
//             </div>
//             <div className='col-6 bg-warning'>
//               <h1 className='d-flex m-1 p-1'>Name: {item.title}</h1>
//               <h2 className='d-flex m-1 p-1'>Phone:{item.maxApplicants}</h2>
//               <h2 className='d-flex m-1 p-1'>Email:{item.maxPositions}</h2>
//               <h2 className='d-flex m-1 p-1'>Job: {item.duration}</h2>
//             </div>
//             <div className='col-3 bg-dark'>
//               <button onClick={(e) => handleResume(e)} style={{ width: '90%', height: '20%' }} className='my-2 p-3 btn btn-primary'>Download Resume</button>
//               <div className='h-50'>
//                 <button onClick={() => handleShortlist(item._id)} style={{ width: '45%', height: '80%' }} className='my-2 mx-1 p-3 btn btn-warning'>Shortlist</button>
//                 <button onClick={() => handleReject(item._id)} style={{ width: '45%', height: '80%' }} className='my-2 mx-1 p-3 btn btn-danger'>Reject</button>
//               </div>
//               <button onClick={() => handleAccept(item)} style={{ width: '90%', height: '20%' }} className='my-2 p-3 btn btn-success'>Accept</button>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   )
// }


// export default ViewJobApplicant;



import React, { Component, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { apiPath } from "../utils/Consts";
import AdminNav from "./AdminNav";
import { useDispatch, useSelector } from "react-redux";
import * as ReactBootstrap from 'react-bootstrap'
import './Employee.css'
import  FileDownload  from "js-file-download"
import { useEffect } from "react";

function ViewJobApplicant() {
  const Applicant=[{
  }]
  const [data,setdata]=useState([])
  console.log('hello everyone')

  useEffect(()=>
{
    axios.get('http://localhost:9000/apply/applicant').then((res)=>{
      setdata(res.data)
    console.log(res)}).catch((e)=>console.log(e))
},[])
  
  const handleShortlist = (e) => {
    e.preventDefault();
    console.log("shortlist button clicked");
  }
  const handleReject = (e) => {
    e.preventDefault();
    console.log("reject button clicked");
  }
  const handleResume = (e) => {
    e.preventDefault()
   axios('http://localhost:9000/download', {
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        FileDownload(response.data,"Resume.pdf")
      })
      .catch((error) => {
        console.log(error);
        
      });
  
};
  return (
    <div>
      {console.log(data)}
      <AdminNav />
      <h1>Applications</h1>

{
  data.map((item)=>(
    <div>
      <div className=' shadow-lg mb-5 col mx-4 my-2 p-2 d-flex gap-1'>
        <div className='col-3 bg-info'>
          <img style={{ width: '83%', height: "82%" }} className='my-4 align-items-center rounded-circle' src="https://www.gstatic.com/webp/gallery/1.sm.jpg" alt="image not found"></img>
        </div>
        <div className='col-6 bg-warning'>
          <h1 className='d-flex m-1 p-1'>Name: {item.name}</h1>
          <h1 className='d-flex m-1 p-1'>Title: {item.title}</h1>
          <h1 className='d-flex m-1 p-1'>Email: {item.email}</h1>
        </div>
        <div className='col-3 bg-dark'>
          <button onClick={(e) => handleResume(e)} style={{ width: '93%', height: '48%' }} className='my-2 p-3 btn btn-primary'>Download Resume</button>
          <div className='h-50'>
            <button onClick={(e) => handleShortlist(e)} style={{ width: '45%', height: '86%' }} className='my-2 mx-1 p-3 btn btn-success'>Shortlist</button>
            <button onClick={(e) => handleReject(e)} style={{ width: '45%', height: '86%' }} className='my-2 mx-1 p-3 btn btn-danger'>Reject</button>
          </div>
        </div>
      </div>
    </div>
  ))
}
    </div>
  )
}


export default ViewJobApplicant;




