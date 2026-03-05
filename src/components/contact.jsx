import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('public_key')
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    emailjs
      .sendForm('service_ab10bka', 'template_hv03b5i', formRef.current, 'gcBZzPTzxHu4CKwaq')
      .then(
        () => {
          setMessage('Message sent successfully! ✓')
          formRef.current.reset()
          setLoading(false)
          setTimeout(() => setMessage(''), 3000)
        },
        (error) => {
          setMessage('Failed to send message. Please try again.')
          setLoading(false)
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div className='min-h-screen bg-amber-50 flex items-center justify-center py-16 px-4'>
      <div className='max-w-lg w-full bg-white rounded-lg shadow-lg border-2 border-teal-600 p-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300'>
        <h1 className='text-4xl font-bold mb-2 text-teal-700 text-center'>Get In Touch</h1>
        <p className='text-teal-600 text-center mb-8 text-lg'>
          Have a question? Send me a message and I'll respond as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className='space-y-5'>
          <div className='animate-slideIn' style={{ animationDelay: '0.1s' }}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='w-full px-4 py-3 rounded-lg border-2 border-teal-600 text-teal-700 placeholder-teal-500 placeholder-opacity-60 focus:outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-300 bg-white transition-all duration-300'
            />
          </div>

          <div className='animate-slideIn' style={{ animationDelay: '0.2s' }}>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='w-full px-4 py-3 rounded-lg border-2 border-teal-600 text-teal-700 placeholder-teal-500 placeholder-opacity-60 focus:outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-300 bg-white transition-all duration-300'
            />
          </div>

          <div className='animate-slideIn' style={{ animationDelay: '0.3s' }}>
            <textarea
              name='message'
              placeholder='Your Message'
              required
              className='w-full px-4 py-3 rounded-lg border-2 border-teal-600 text-teal-700 placeholder-teal-500 placeholder-opacity-60 focus:outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-300 bg-white transition-all duration-300 resize-vertical min-h-40'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl animate-slideIn'
            style={{ animationDelay: '0.4s' }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <div
              className={`px-4 py-3 rounded-lg font-medium text-center animate-slideIn ${
                message.includes('successfully')
                  ? 'bg-teal-100 text-teal-800 border border-teal-600'
                  : 'bg-red-100 text-red-800 border border-red-600'
              }`}
            >
              {message}
            </div>
          )}
        </form>

        <div className='mt-10 pt-8 border-t-2 border-teal-200'>
          <p className='text-center text-teal-600 font-semibold mb-6'>Connect with me</p>
          <div className='flex justify-center items-center gap-6'>
          
            <a
              href='mailto:sagarsoni39166@gmail.com'
              title='Email'
              className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='4' width='20' height='16' rx='2'></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </svg>
            </a>

            
            <a
              href='https://linkedin.com/in/gangasagar-soni'
              title='LinkedIn'
              className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'/>
              </svg>
            </a>

            
            <a
              href='https://instagram.com/sagar_soni_915'
              title='Instagram'
              className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5' fill='none' stroke='currentColor' strokeWidth='2'/>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' fill='none' stroke='currentColor' strokeWidth='2'/>
                <circle cx='17.5' cy='6.5' r='1.5' fill='currentColor'/>
              </svg>
            </a>

            
            <a
              href='https://github.com/gangasagar-soni'
              title='GitHub'
              className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.815 1.102.815 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-slideIn { animation: slideIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  )
}

export default Contact