import React from 'react'
import logo from '../../public/finta-logo-icon.svg'
function Nav() {
  return (
    <div className='flex justify-between w-full py-4'>
       <a href="">
        <img src={logo} alt="Logo" />
       </a>
    </div>
  )
}

export default Nav