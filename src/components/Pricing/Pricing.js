import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <div className='pricing-section'>
        <div className='container'>
            <div className='content'>
                <div className='content-top'>
                    <div class="col-1">
                        <h2>Everything you need for <span className='primary-color'>$99 a month</span></h2>
                        <p>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                    </div>
                    <div className='col-2'>
                        <button type='button'>Get Started Today</button>
                    </div>
                </div>
                <div className='content-bottom'>
                    <div className='col-1'>
                        <span className='primary-color'>Everything you need</span>
                        <h3>All-in-one platform</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta, temporibus ea est ipsum vero recusandae 
                            blanditiis ut doloribus excepturi!</p>
                    </div>
                    <div className='col-2'>
                        <div className='col-1'>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                        <div className='col-2'>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing