import React from 'react'
import Navbar from './Navbar'

export default function Signup() {
  return (
    <div style={{backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20200703/pngtree-mathematics-education-calculator-ruler-hand-drawn-background-image_340649.jpg")',backgroundSize:'cover',height: '90vh'}}>
    <div className=''>
      
      <div className=' container w-content  border border-dark mx-auto my-5 py-5 px-4 ' style={{ width: "350px", }}>

        <h1>Signup </h1>
        <br />

        <div class="mb-3">
          <b>
            <label for="exampleFormControlInput1" class="form-label">Full name:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
          </b>
        </div>
        <div class="mb-3">
          <b>
            <label for="exampleFormControlInput1" class="form-label">username:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="username" />
          </b>
        </div>
        <div class="mb-3">
          <b>
            <label for="exampleFormControlInput1" class="form-label">Mobile Number:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
          </b>
        </div>
        <div class="mb-3">
          <b>
            <label for="exampleFormControlTextarea1" class="form-label">OTP:</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" />
          </b>
        </div>
        <div class="mb-3 w-full">
          <button className='btn btn-success  w-full'>Sign up</button>
        </div>
      </div>
    </div>
    </div>
  )
}