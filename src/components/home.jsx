import React from 'react'
import profile from '../assets/photo.jpg';

const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-teal-50'>
      <div className='flex flex-col items-center justify-center gap-8 px-6 py-12'>
        <div className='relative'>
          
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
          <div className='h-1 w-24 bg-gradient-to-r from-teal-700 to-teal-500 rounded-full mx-auto'></div>
        </div>

        <p className='text-center text-gray-600 text-lg max-w-md leading-relaxed font-medium'>
          Full Stack Developer | Creative Coder | Tech Enthusiast
        </p>

        <div className='flex items-center justify-center space-x-6 mt-6'>
          <a
            href='https://github.com/Gangasagar-soni'
            target='_blank'
            rel='noopener noreferrer'
            className='text-teal-700 hover:text-teal-900 transition-colors duration-200'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729
                1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931
                0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404
                2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.815 1.102.815 2.222
                0 1.606-.015 2.902-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          <a
            href='https://linkedin.com/in/gangasagar-soni-290052303'
            target='_blank'
            rel='noopener noreferrer'
            className='text-teal-700 hover:text-teal-900 transition-colors duration-200'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.556v-5.604c0-1.336-.026-3.057-1.864-3.057-1.865 0-2.15 1.454-2.15 2.956v5.705H9.37V9h3.414v1.561h.047c.476-.9 1.637-1.847 3.37-1.847 3.605 0 4.27 2.373 4.27 5.457v6.281z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home