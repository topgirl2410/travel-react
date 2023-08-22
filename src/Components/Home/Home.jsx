import React from 'react'
import './home.scss'
import video from '../../assets/barco.mp4'

const Home = () => {
    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Package
                    </span>

                    <h1 className='homeTitle'>
                        Search your Holidays
                    </h1>

                </div>
            </div>
        </section>
    )
}

export default Home