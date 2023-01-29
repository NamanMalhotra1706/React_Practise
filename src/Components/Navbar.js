import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props){
    return (
        <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/Kepper">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/Kepper">Home</Link>
        </li>
                   
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/TextUtilts"}>TextUtilts</Link>
        </li>

        <li className="nav-item">
          <Link to={"/FAQ"} className="nav-link active" aria-current="page">FAQ</Link>
        </li>      
      </ul>


      {/* <div className='d-flex'>
          <div className='bg-primary rounded m-2' onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:"pointer"}} />
          <div className='bg-danger rounded m-2' onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:"danger"}} />
          <div className='bg-success rounded m-2' onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:"success"}} />
          <div className='bg-warning rounded m-2' onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:"warning"}} />
      </div> */}
     
      <form className="d-flex px-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input " onClick={()=>props.toggleMode(null)}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
        </div>
      

    </div>
  </div>
</nav>
        </div>
    )
}