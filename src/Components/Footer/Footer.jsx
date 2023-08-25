import React from 'react'
import './footer.scss'
import footer from '../../assets/footer.mp4'
import { FiSend } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={footer} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP ON TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>
                            <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="/" className='logo flex'>
                                Travel. <MdTravelExplore className='icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer