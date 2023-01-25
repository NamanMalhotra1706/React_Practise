import React from 'react';
// import { NavLink } from "react-router-dom";


export default function Navbar(props){
    return (
        <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a  className="navbar-brand" href="/">{props.title}</a >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/">Home</a >
        </li>
        <li className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.Items}
          </a >
          <ul className="dropdown-menu">
            <li><a  className="dropdown-item" href="/">Action</a ></li>
            <li><a  className="dropdown-item" href="/">Another action</a ></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a  className="dropdown-item" href="/">Something else here</a ></li>
          </ul>
        </li>

             
        <li className="nav-item">
          <a  className="nav-link active" aria-current="page" href={"/TextUtilts"}>TextUtilts</a >
        </li>

        <li className="nav-item">
          <a  href={"/FAQ"} className="nav-link active" aria-current="page">FAQ</a >
        </li>      
      </ul>
     
      <form className="d-flex px-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input " onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
</div>
      

    </div>
  </div>
</nav>
        </div>
    )
}