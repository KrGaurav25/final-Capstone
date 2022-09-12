import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'

const Navi=()=>
{
    const navigate=useNavigate()
    const logoutMethod=()=>{
      
      localStorage.removeItem('token');
          localStorage.removeItem('userId');
          
      navigate('/')
    }
    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <Link class="navbar-brand top" to='/'><h1>Find Job</h1></Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" to='/userdashboard'><h4 className='nav-icon'>Home</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/application'><h4 className='nav-icon'>Application</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/profile'><h4 className='nav-icon'>Profile</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/wishlist'><h4 className='nav-icon'>Wishlist</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/resume'><h4 className='nav-icon'>Resume Upload</h4></Link>
                        </li>
                        <li class="nav-item">
                        <i className='fa fa-sign-out logout ' style={{textDecoration: 'none', color:"white", margin:"2rem"}} onClick={logoutMethod}><h4 className='nav-icon'>Logout</h4></i>
                        </li>

                        <li class="nav-item logout">
                        
                        </li>
                    </ul>
                </div>
                </div>
                </nav> 
        </div>
    )
}
export default Navi