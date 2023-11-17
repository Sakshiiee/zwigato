import React, { useState } from 'react'
import Footer from "./Footer"
export default function Home() {
  const [userInput, setUserInput] = useState("")
  function uppercase() {
    console.log("uppercase")
    setUserInput(userInput.toUpperCase())
  }
  function lowercase() {
    console.log("lowercase")
    setUserInput(userInput.toLowerCase())
  }
  function cube() {
    console.log("cube")
    alert(`Welcome : ${userInput ** 3}`)
  }
  function welcome() {
    console.log("welcome : ", userInput)
    alert(`Welcome : ${userInput}`)
  }
  function split() {
    console.log("split")

  }
  return (
    <div className=''>
      <center><h1 className='my-5'>Enter text below to analyse below</h1></center>
      <center> <input placeholder='Enter text here' value={userInput} style={{ height: "20vh" }} className=' w-50 px-5 ' onChange={(e) => {
        setUserInput(e.target.value)
      }} /></center>
      <div className=' d-flex w-75 justify-content-around mx-auto mt-5'>
        <button onClick={() => {
          uppercase()
        }}>Uppercase</button>
        <button onClick={() => {
          lowercase()
        }}>Lowercase</button>
        <button onClick={() => {
          cube()
        }}>Cube</button>
        <button onClick={() => {
          welcome()
        }}>Welcome</button>
        <button onClick={() => {
          uppercase()
        }}>Convert font style</button>
        <button onClick={() => {
          split()
        }}>Split</button>
      </div>
      <Footer />
    </div>
  )
}
