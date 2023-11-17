import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-dark text-white text-center mt-5 py-3'>
        <div className='row'>
            <div className='col-sm'>Home</div>
            <div className='col-sm'>Features</div>
            <div className='col-sm'>Pricing</div>
            <div className='col-sm'>FAQs</div>
            <div className='col-sm'>About</div>
        </div>
        <hr/>
        <div className='text-center'>
            &copy; 2022 Company.Inc
        </div>
    </div>
  )
}