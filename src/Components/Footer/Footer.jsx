import React from 'react'
import './footer.scss'
import footer from '../../assets/footer.mp4'
import { FiSend } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
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
                                <MdTravelExplore className='icon' />    Travel.
                            </a>
                        </div>
                        <div className="footerParagraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat adipisci sint, repellendus explicabo inventore, optio at soluta autem animi veniam cum deserunt dolorum ab pariatur cupiditate, quibusdam asperiores sequi eveniet?
                        </div>
                        <div className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/** Group one */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>

                        {/** Group two */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>

                        {/** Group three */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Oceania
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer