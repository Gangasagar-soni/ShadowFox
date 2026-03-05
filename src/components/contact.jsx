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