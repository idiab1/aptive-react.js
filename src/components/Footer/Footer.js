import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='content'>
                <div className='col-1'>
                    <div className='links'>
                        <h5>Solutions</h5>
                        <ul>
                            <li>
                                <Link to='/' className='footer-link'>Marketing</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Analytics</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Commerce</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Insights</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h5>Support</h5>
                        <ul>
                            <li>
                                <Link to='/' className='footer-link'>Pricing</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Documentation</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Guides</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>API Status</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h5>Company</h5>
                        <ul>
                            <li>
                                <Link to='/' className='footer-link'>About</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Jobs</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Press</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h5>Legal</h5>
                        <ul>
                            <li>
                                <Link to='/' className='footer-link'>Claim</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Privacy</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Cookies</Link>
                            </li>
                            <li>
                                <Link to='/' className='footer-link'>Terms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='subscribe'>
                        <h5>Subscribe to our newsletter</h5>
                        <p>The latest news, articles, and resources sent to your inbox weekly.</p>
                        <form>
                            <input type='email' placeholder='Enter your email' />
                            <button type='button'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='copyrights'>
                <div className='info'>
                    <p>&copy; Workflow, Inc. All rights reserved | Re-design by 
                        <Link to='https://www.linkedin.com/in/islam-diab-47b98b176/'>Islam Diab</Link></p>
                </div>
                <div className='social-media'>
                    <ul>
                        <li><Link to="https://www.linkedin.com/in/islam-diab-47b98b176/"><FaLinkedin size={20}/></Link></li>
                        <li><Link to="https://github.com/islamdiab-stack"><FaGithub size={20}/></Link></li>
                        <li><Link to="https://www.facebook.com/islamdiab967/"><FaFacebook size={20}/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer