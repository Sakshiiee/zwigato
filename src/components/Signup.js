import React from 'react'
import Navbar from './Navbar'

export default function Signup() {
  return (
    <div className=''>
      <Navbar />
      <div className=' w-25 border border-dark mx-auto my-5 py-5 px-4 '>


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
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
        </b>
        </div>
        <div class="mb-3">
        <b>
          <label for="exampleFormControlTextarea1" class="form-label">Mobile number:</label>
          <input type="password" class="form-control" id="exampleFormControlInput1"/>
        </b>
        </div>
        <div class="mb-3 w-full">
          <button className='btn btn-success  w-full'>Sign up</button>
        </div>
      </div>
    </div>
  )
}