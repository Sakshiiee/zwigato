import React, { useState } from 'react'
import Footer from "./Footer"
export default function Home() {
  const [userInput, setUserInput] = useState("")
  function uppercase() {
    console.log("uppercase")
    setUserInput(userInput.toUpperCase())
    alert(`Uppercase : ${userInput.toUpperCase()}`)
  }
  function lowercase() {
    console.log("lowercase")
    setUserInput(userInput.toLowerCase())
    alert(`Lowercase : ${userInput.toLowerCase()}`)
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
    alert(`SplitText : ${userInput.replace(/[ ,]+/g, ", ")}`)


  }
  return (
    <div className=''>
      <center><h1 className='my-5' style={{color:"purple"}}>Enter text below to analyse below</h1></center>
      <center> <input placeholder='Enter text here' value={userInput} style={{ height: "30vh" }} className=' w-75 px-5 ' onChange={(e) => {
        setUserInput(e.target.value)
      }} /></center>
      <div className=' d-flex w-50 justify-content-around mx-auto mt-5'>
        <button className='px-2 text-dark bg-primary rounded 'style={{fontFamily: 'cursive, sans-serif'}}onClick={() => {
          uppercase()
        }}>Uppercase</button>
        <button className='px-2 text-dark bg-primary rounded'style={{fontFamily: 'cursive, sans-serif'}} onClick={() => {
          lowercase()
        }}>Lowercase</button>
        <button className='px-2 text-dark bg-primary rounded'style={{fontFamily: 'cursive, sans-serif'}} onClick={() => {
          cube()
        }}>Cube</button>
        <button className='px-2 text-dark bg-primary rounded 'style={{fontFamily: 'cursive, sans-serif'}} onClick={() => {
          welcome()
        }}>Welcome</button>
        <button className='px-2 text-dark bg-primary rounded'style={{fontFamily: 'cursive, sans-serif'}} onClick={() => {
          uppercase()
        }}>Convert font style</button>
        <button className='px-2 text-dark bg-primary rounded'style={{fontFamily: 'cursive, sans-serif'}} onClick={() => {
          split()
        }}>Split</button>
      </div>
      <Footer />
    </div>
  )
}
