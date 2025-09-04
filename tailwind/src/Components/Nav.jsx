import React from 'react'
import logo from '../../public/finta-logo-icon-and-wordmark.svg'
function Nav() {
  const links = [
  { "label": "Founders", "href": "/" },
  { "label": "Guide", "href": "/about" },
  { "label": "Pricing", "href": "/services" },
  { "label": "Log in", "href": "/contact" }
  ]

  return (
    <div className='z-50 flex justify-between w-full md:py-0'>
       <a href="/">
        <img className='w-16 h-16' src={logo} alt="Logo" />
       </a>

       <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center text-[15px] font-medium text-neutral-950 gap-4 md:gap-6'>
          {
            links.map((item) => (
              <li className='hover:text-neutral-500' key={item.href}><a href={item.href}>{item.label}</a></li>
            ))
          }
          <button className='bg-[#2579f3] px-4 text-white py-[7px] rounded-lg shadow-lg text-shadow-md tracking-wide'>Start free trial</button>
        </ul>
       </div>
    </div>
  )
}

export default Nav