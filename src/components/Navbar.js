import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/TextForm">Text Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.about}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {                            //name of the component "navbar" 
    title: PropTypes.string.isRequired,        // props that to be sent and definded that the prop is to be string, 
    about: PropTypes.string.isRequired         //"isRequired" is used that string has to be defined

}

// Navbar.defaultProps = {             //sets the default value for props 
//     title: "Set title here",
//     about: "Set about here"
// }
