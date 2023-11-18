import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-danger"style={{ fontFamily: 'cursive, sans-serif'}} href=""><h2><i><b> TextAnalyser</b></i></h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link btn border border-dark border border-2 active mx-2 px-2 text-dark bg-info rounded" style={{ fontFamily: 'cursive, sans-serif' }} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn border border-dark border border-2 active mx-2 px-2 text-dark  bg-info rounded" style={{ fontFamily: 'cursive, sans-serif' }} aria-current="page" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn border border-dark border border-2 mx-2 px-2 text-dark bg-info rounded" style={{ fontFamily: 'cursive, sans-serif' }} href="/signup">Signup</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 border border-dark border border-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success mb-2 bg-info text-dark btn border border-dark border border-2" style={{ fontFamily: 'cursive, sans-serif' }} type="submit">Search</button>
          </form>
          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}
