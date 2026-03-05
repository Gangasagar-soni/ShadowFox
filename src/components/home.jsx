import React from 'react'
import profile from '../assets/photo.jpg';

const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-teal via-teal-50 to-white'>
      <div className='flex flex-col items-center justify-center gap-8 px-6 py-12'>
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full blur-3xl opacity-40'></div>
          <img 
            src={profile}
            alt='Profile'
            className='relative w-48 h-48 rounded-full border-4 border-teal-500 shadow-2xl object-cover'
          />
        </div>
        
        <div className='text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-2 text-teal-700'>
            Gangasagar Soni
          </h1>
          <div className='h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mx-auto'></div>
        </div>

        {/* Optional Subtitle */}
        <p className='text-center text-teal-600 text-lg max-w-md leading-relaxed font-medium'>
          Full Stack Developer | Creative Coder | Tech Enthusiast
        </p>
      </div>
    </div>
  )
}

export default Home