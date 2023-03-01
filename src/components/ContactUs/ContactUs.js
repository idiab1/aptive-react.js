import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div className='contact-section'>
        <div className='container'>
            <div className='content'>
                <div className='col-1'>
                    <div className='info'>
                        <h2>Get in touch</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto natus fugit saepe minima rem nemo laborum ea dolorum est.</p>
                        <ul>
                            <li>742 Evergreen Terrace</li>
                            <li>Springfield, OR 12345</li>
                            <li><FaPhone size={15}/> +1 (555) 123-4567</li>
                            <li><FaEnvelope size={15}/> support@example.com</li>
                        </ul>
                        <p>Looking for careers? <span className='primary-color'>View all jop openings.</span></p>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='form-layout'>
                        <form action=''>
                            <input type='text' placeholder='Full Name' />
                            <input type='email' placeholder='Email' />
                            <input type='text' placeholder='Phone' />
                            <textarea placeholder='Message'></textarea>
                            <input type='checkbox' /> 
                            <label>By checking this box, you agree to the <span className='primary-color'>Privacy Policy</span> and <span className='primary-color'>Cookie Policy</span>.</label>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs