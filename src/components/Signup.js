import React from 'react'
import Navbar from './Navbar'

export default function Signup() {
  return (
    <div style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBoWuxVILRpF93uu8NxMiL37-aUz_8IQ7sg&usqp=CAU")',backgroundSize:'cover',height: '100vh'}}>
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
            <label for="exampleFormControlInput1" class="form-label">Email id:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
          </b>
        </div>
        <div class="mb-3">
          <b>
            <label for="exampleFormControlTextarea1" class="form-label">Password:</label>
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