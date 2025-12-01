import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* 🔹 Brand Name */}
        <a className="navbar-brand" href="#">{props.title}</a>

        {/* 🔹 Home & About Links (brand ke side me) */}
        <div className="d-flex align-items-center">
          <a className="nav-link active text-light mx-2" href="#">Home</a>
          {/* <Link className="nav-link text-light mx-2" to="/about">About</Link> */}
        </div>

        {/* 🔹 Collapsible Button for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
            checked={props.mode === 'dark'}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
          >
            Enable Dark Mode
          </label>
        </div>

      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set text here',
  aboutText: 'About text here'
};
