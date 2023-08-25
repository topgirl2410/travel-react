import React from 'react'
import './footer.scss'
import footer from '../../assets/footer.mp4'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={footer} loop autoPlay muted type="video/mp4"></video>
            </div>
        </section>
    )
}

export default Footer