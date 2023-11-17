import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner mx-auto border">
          <div class="carousel-item active mx-auto">
            <img src="../pizza1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item mx-auto">
            <img src="../pizza2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item mx-auto">
            <img src="../pizza3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* .. */}
      <br/>
      <div className='divider py-1 bg-dark'></div>
      <br/>

      <div className='row container mx-auto'>
      <div class="card col-sm">
        <img src="../pizza1.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <a href="#" class="btn btn-primary">Go Next</a>
            <a href="#" class="btn btn-primary m-1"> Next</a>
          </div>
      </div>
        <div class="card col-sm">
        <img src="../pizza2.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <a href="#" class="btn btn-primary">Go Next</a> 
            <a href="#" class="btn btn-primary m-1">Next</a>
          </div>
      </div>
      <div class="card col-sm" >
        <img src="../pizza3.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <a href="#" class="btn btn-primary">Go Next</a>
            <a href="#" class="btn btn-primary m-1">Next</a>
          </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}