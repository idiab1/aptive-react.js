import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials-section'>
        <div className='container'>
            <div className='content'>
                <div className='info'>
                    <h2><FaDatabase size={20}/> Staxx</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus totam optio maiores, 
                        delectus deserunt rerum quae officiis inventore magni.</p>
                    <p>Marie Chilvers</p>
                    <p>CEO, Staxx</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials