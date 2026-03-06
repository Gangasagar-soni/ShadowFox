import React from 'react'
import profile from '../assets/photo.jpg';

const About = () => {
  return (
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-8 py-12 bg-amber-50 min-h-screen'>
        <div className='relative flex-shrink-0'>
         
  <img 
    src={profile}
    alt='Profile'
    className='relative w-48 h-48 rounded-full border-4 border-teal-500 shadow-2xl object-cover'
  />
  <h2 className='text-teal-500 text-2xl font-bold mt-4 text-center border-b-2 border-teal-500 lg:border-b-0  lg:pl-4 lg:text-left'>Gangasagar Soni</h2>
          </div>
          <div className='px-8'>
            <h2 className='text-teal-800 text-2xl font-bold'>About Me</h2>
            <p className='text-gray-600 mt-4'>
              I am a passionate MERN stack developer with experience in building scalable web applications. Using technologys like React, Node.js, Express, and MongoDB to create dynamic and responsive user interfaces. I enjoy solving complex problems and continiously learning new technology to enhance my skills.
            </p><br/>
            <h3 className='text-teal-800 text-lg font-bold'>Skills</h3>
            <ul className='list-disc list-inside text-gray-600 mt-2'>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MYSQL</li>
            </ul>
          </div>
          </div>
  )
}

export default About