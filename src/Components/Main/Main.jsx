import React, { useEffect } from 'react'
import './main.scss';

import Aos from 'aos'
import 'aos/dist/aos.css'

// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClipboardCheckFill } from 'react-icons/bs'

// import the images

import img10 from '../../assets/img10.jpg'
import img6 from '../../assets/img6.jpg'
import img11 from '../../assets/img11.jpg'
import img9 from '../../assets/img9.jpg'
import img12 from '../../assets/img12.jpg'
import img3 from '../../assets/img3.jpg'
import img5 from '../../assets/img5.jpg'
import img2 from '../../assets/img2.jpg'
import img8 from '../../assets/img8.jpg'




// Data
const Data = [
    {
        id: 1,
        imgSrc: img10,
        destTitle: 'Vacations',
        location: 'New Zeland',
        grade: 'CULTURAL RELAX',
        fees: '1000€',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurius stays and adventurous activities',
    },
    {
        id: 2,
        imgSrc: img6,
        destTitle: 'Incredible Vacations',
        location: 'Bavaro, Punta Cana',
        grade: 'CULTURAL RELAX',
        fees: '1200€',
        description: 'The sophisticated eastern region of the Dominican Republic attracts vacationers from all over the world who come to explore the natural treasures and enjoy the luxurious resorts of Punta Cana.',
    },
    {
        id: 3,
        imgSrc: img11,
        destTitle: 'Aventuras Increibles',
        location: 'Maldivas',
        grade: 'CULTURAL RELAX',
        fees: '1500€',
        description: 'This hotel is located in Male, close to several points of interest. It offers its guests the ideal place to enjoy an exciting getaway. The property is nestled in the midst of the natural beauty and splendor of the Maldives, and immerses its visitors in an atmosphere of peace and serenity. This hotel has a charming design, with radiant exteriors that blend perfectly with its surroundings.',
    },
    {
        id: 4,
        imgSrc: img9,
        destTitle: 'Playas Paridisiacas',
        location: 'Rio de Janeiro',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'You will feel at home in any of the 143 rooms with air conditioning, minibar and flat screen TV. The free Wi-Fi Internet connection will keep you in touch with your loved ones; you can also watch your favorite program on the TV with cable channels. The bathroom has a shower and free toiletries. Conveniences include a safe, blackout drapes, and a phone.',
    },
    {
        id: 5,
        imgSrc: img12,
        destTitle: 'Perfecto Relax',
        location: 'Tenerife',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'Located in the Golf Sur de Tenerife complex, overlooking the Atlantic Ocean. The Grand Muthu Golf Plaza Hotel & Spa offers a spa, gym and outdoor pools, surrounded by terraces and gardens. Grand Muthu Golf Plaza Hotel & Spa offers apartments and studios, all with air conditioning and a furnished balcony or terrace. They include a lounge with satellite TV and a well-equipped kitchenette. There is free Wi-Fi in public areas.',
    },
    {
        id: 6,
        imgSrc: img3,
        destTitle: 'Aurora Boreal',
        location: 'Suiza',
        grade: 'CULTURAL RELAX',
        fees: '2500€',
        description: 'For unparalleled relaxation, nothing like a visit to the spa, which offers massages, body treatments and facials. Hot tub and sauna are the perfect solution to relax after a day on the ski slopes. You will also find free Wi-Fi Internet connection, concierge services, and ski storage. Thanks to the free shuttle service you can get to the ski slopes comfortably and quickly.',
    },
    {
        id: 7,
        imgSrc: img5,
        destTitle: 'Hotel Villa del Sol',
        location: 'Menorca',
        grade: 'CULTURAL RELAX',
        fees: '1000€',
        description: 'The Hotel Valentin Son Bou is located on the south coast of Menorca, on a hill overlooking the beautiful beach of Son Bou. It features an indoor pool, an outdoor pool and rooms with a balcony and air conditioning. All apartments and rooms at Valentin Son Bou Hotel have tiled floors and are decorated in soft colours.',
    },
    {
        id: 8,
        imgSrc: img2,
        destTitle: 'Anixi Hotel & Studios',
        location: 'Mikonos',
        grade: 'CULTURAL RELAX',
        fees: '2000€',
        description: 'Modern hotel with swimming pool, free Wi-Fi and just 300 m from beautiful beaches Anixi Hotel is located next to one of the most fascinating beaches on the island of Mykonos, Ornos Beach, known for its crystal clear waters, golden sands and numerous bars and restaurants.',
    },
    {
        id: 9,
        imgSrc: img8,
        destTitle: 'Amaneceres Inolvidables',
        location: 'Puerto Rico',
        grade: 'CULTURAL RELAX',
        fees: '2200€',
        description: 'With an outdoor swimming pool and many other recreational facilities at your disposal, you wont have a spare minute. You also have a terrace where you can sit and contemplate the landscape. You will also find free Wi-Fi Internet access and tour assistance (ticket acquisition).',
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