import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AdminNav.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
const AdminNav=()=>{
  const navigate=useNavigate()
  const logoutMethod=()=>{
    localStorage.removeItem('accesstoken')
    navigate('/')
 }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand><h1>Find Job</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/admindashboard' className='navlinkstyle'><h4 className='nav-icon'>Home</h4></Link>
            <Link to='/addjobs' className='navlinkstyle'><h4 className='nav-icon'>Add Jobs</h4></Link>
            <Link to='/myjobs' className='navlinkstyle'><h4 className='nav-icon'>My Jobs</h4></Link>
            <Link to='/Applicants' className='navlinkstyle'><h4 className='nav-icon'>View Job Applicants</h4></Link>
            <Link to='/myEmployees' className='navlinkstyle'><h4 className='nav-icon'>My Employees</h4></Link>
            <Link to='/adminprofile' className='navlinkstyle'><h4 className='nav-icon'> Profile</h4></Link>
            <i className='fa fa-sign-out navlinkstyle' onClick={logoutMethod} ><h4 className='nav-icon'>Logout</h4></i>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;