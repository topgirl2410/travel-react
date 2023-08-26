import React, { useEffect } from 'react'
import './home.scss'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { TfiFacebook, TfiInstagram } from 'react-icons/tfi'
import { FaTripadvisor } from 'react-icons/fa'
import { TbApps } from 'react-icons/tb'
import { BsListTask } from 'react-icons/bs'
import video from '../../assets/barco.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    // Lets create a react hook to add a scroll animation...
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        Our Package
                    </span>

                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search your Holidays
                    </h1>

                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className='priceInput'>
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">5000€</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />

                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        < FaTripadvisor className="icon" />
                        <TfiFacebook className='icon' />
                        <TfiInstagram className='icon' />
                    </div>

                    <div data-aos="fade-up" className="leftIcons">
                        <BsListTask className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home