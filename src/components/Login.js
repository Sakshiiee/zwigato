import React from 'react'
import Navbar from './Navbar'
export default function Login() {
  return (
    <div className="background-image h-100" >
      <Navbar />
      <div className='container w-content border border-dark  mx-auto my-5 py-5 px-4 ' style={{ width: "350px" }}>

        <h1>Login </h1>
        <br />
      

        <div class="mb-3">
          <b>
            <label for="exampleFormControlInput1" class="form-label">Name: </label>
            <input  type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name here" />
          </b>
        </div>
        <div class="mb-3">
          <b>
            <label for="exampleFormControlTextarea1" class="form-label">Email: </label>
            <input  type="password" class="form-control" id="exampleFormControlInput1" placeholder="sakshi123@gmail.com" />
          </b>
        </div>
        <div class="mb-3 w-full">
          <button className='btn btn-success  w-full'>Login</button>
        </div>
      </div>
    </div>
  )
}
