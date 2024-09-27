import React from 'react'

const Header = () => {
  return (
    <div className='Headersection'>
    <div className='left'>
        <div className='title'>
            <h2>Shopping</h2>
        </div>
         </div>
    <div className='middle'>
        <ul>
            <li>Woman</li>
            <li>Men</li>
            <li>Children</li>
            <li>Apparels</li>
        </ul>
    </div>
    <div className='search'>
       <input type="text" placeholder='search...'/> 
    </div>
    <div className='right'>
        <div className='signin'>Sign-in/Sign-up</div>
        <div className='cart'>Cart</div>
    </div>
    </div>
  )
}

export default Header
