import React from 'react'


function Navigation() {
  return (
    <div>
      <div className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <h1 className='text-white text-xl font-bold'>GANGASAGAR SONI</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li><a href='/' className='text-white hover:text-gray-300'>Home</a></li>
            <li><a href='/about' className='text-white hover:text-gray-300'>About</a></li>
            <li><a href='/contact' className='text-white hover:text-gray-300'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation