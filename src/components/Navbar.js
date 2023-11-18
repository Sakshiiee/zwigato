import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-danger hide"style={{ fontFamily: 'cursive, sans-serif'}} href=""><h2><i><b> TextAnalyser</b></i></h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className=" buttonNavbar"  aria-current="page" href="/">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="buttonNavbar" aria-current="page" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="buttonNavbar" href="/signup">Signup</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 border border-dark border border-2" type="search" placeholder="Search" aria-label="Search" />
            <button className=" buttonNavbar"  type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}
