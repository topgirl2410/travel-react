import React, { useEffect } from 'react'
import './main.scss';

import Aos from 'aos'
import 'aos/dist/aos.css'

// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClipboardCheckFill } from 'react-icons/bs'

// import the images

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'




// Data
const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'The most beautiful tree in the world',
        location: 'Oaxaca, México',
        grade: 'CULTURAL RELAX',
        fees: '1000€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'The Ruins of Machu Pichu',
        location: 'Perú',
        grade: 'CULTURAL RELAX',
        fees: '1200€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Unforgettable Adventures',
        location: 'Maldivas',
        grade: 'CULTURAL RELAX',
        fees: '1500€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'The Small Fortress Town',
        location: 'Luxemburgo',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Incredible Coasts and Sunrises',
        location: 'Tenerife',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Dreams Cities',
        location: 'Suiza',
        grade: 'CULTURAL RELAX',
        fees: '2500€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Aurora Boreal',
        location: 'Finlandia',
        grade: 'CULTURAL RELAX',
        fees: '1000€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'A city in the clouds',
        location: 'La Paz, bolivia',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Lago Abraham',
        location: 'Canadá',
        grade: 'CULTURAL RELAX',
        fees: '2200€',
        description: 'Nunc efficitur odio sit amet lectus faucibus dapibus. Vivamus rhoncus eros vitae elit ullamcorper, non imperdiet dui viverra. Nam eleifend eros nulla, non euismod ipsum hendrerit a. Nam a erat eu turpis tincidunt accumsan eget vel sem. Maecenas rutrum neque eu ligula interdum faucibus. Cras ac justo varius, vulputate ipsum sit amet, ultrices nibh. Vestibulum faucibus ullamcorper ex, et tempor enim. Etiam sed cursus nisl, a gravida metus. Aenean rhoncus tristique neque a venenatis.',
    }

]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>

                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <BsClipboardCheckFill className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}


export default Main