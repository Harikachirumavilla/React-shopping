

import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
      <div className="left">
         <div className="title">
          <h2>Shopping Mall</h2>
         </div>
      </div>
      <div className="center">
        <ul>
          <li>women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>

        </ul>
        
      </div>
      <div className="Search">
          <input type="text" placeholder='Search'/>
        </div>
      <div className="right">
        <div className="signin">
          Signin / Signup
        </div>
        <div className="Cart">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header