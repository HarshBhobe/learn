import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="/">{props.title}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/">{props.About}</a>
         </li>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/">Action</a></li>
             <li><a className="dropdown-item" href="/">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">Your name</a></li>
           </ul>
         </li>
         
       </ul>
       <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,  // If we send number then error will pop saying failed prop type
                  About: PropTypes.string.isRequired } // for sending string in proptypes .isrequired = it cannot be kept empty

// Navbar.defaultProps = {title: 'Set Title',  
              //          About: 'About Text here'};  // default props, If we don't send any props then this will appear