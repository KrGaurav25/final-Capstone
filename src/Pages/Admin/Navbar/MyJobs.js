import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "./AdminNav";
import Table from 'react-bootstrap/Table'
import * as ReactBootstrap from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './Employee.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const ViewJobPosted = () => {
  const [jobData, setJobData] = useState([])
  const Navigate = useNavigate();
  const handleJobUpdate = (id) => {
    console.log("Inside Update" + " " + id)
    Navigate('/updatejobs', { id })
  }
  
  const handleJobs=(e)=>{
    const fetchJobs = async () => {
      const Jobs = await axios.get("http://localhost:9000/dashboard")
      const job = await Jobs.data;
      console.log("Jobs", job)
      setJobData(job)
    }
    fetchJobs();
  }
  const handleJobDelete = (id) => {
    const newData= jobData.filter((item) => item._id !== id)
    setJobData(newData)
  }
  const handlesort=(e)=>{
    e.preventDefault()
    const x=jobData.sort((a,b)=>{
      return (a.salary-b.salary);
    })
    setJobData(x)
  }
  const renderItem = (item, index) => {
    return (
      <Card className="cardstyle" key={index}>
        <Card.Header>
          <Card.Title><h4><b>Job Title</b></h4></Card.Title>
          <Card.Subtitle><h5>{item.title}</h5></Card.Subtitle>
        </Card.Header>
        <Card.Body className="bg-dark" style={{padding:"0px"}}>
          <Table striped variant="dark" style={{ margin: "0px" }}>
            <tbody>
              <tr>
                <td><b>Skillsets: </b>{item.skillsets}</td>
              </tr>
              <tr>
                <td><b>Maxposition: </b>{item.maxPositions}</td>
              </tr>
              <tr>
                <td><b>Maxapplicants: </b>{item.maxApplicants}</td>
              </tr>
              <tr>
                <td><b>Salary: </b>{item.salary}</td>
              </tr>
              <tr>
                <td><b>Jobtype: </b>{item.jobType}</td>
              </tr>
              <tr>
                <td><b>Duration(in months): </b>{item.duration}</td>
              </tr>
              <tr>
                <td><b>Deadline: </b>{item.deadline}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Link to={"/updatejobs/" + item._id}>
            <ReactBootstrap.Button className="btn-warning btnstyle1">Update</ReactBootstrap.Button>
          </Link>
          <ReactBootstrap.Button className="btn-danger btnstyle2" onClick={() => { handleJobDelete(item._id) }} style={{ marginLeft: '0.3rem' }}>Delete</ReactBootstrap.Button>
        </Card.Footer>
      </Card>
    )
  }
  return (
    <div>
      <AdminNav />
      <h1 className='navbrand'><ReactBootstrap.Button onClick={(e)=>handleJobs(e)}>My Jobs</ReactBootstrap.Button></h1>      
      <button className="btn btn-success" onClick={(e)=>handlesort(e)}>Salary Sort</button>
      <div className="cardblockstyle">
        {
          jobData? jobData.map(renderItem): "No Data"
        }
      </div>
    </div>
  )
}

export default ViewJobPosted;
