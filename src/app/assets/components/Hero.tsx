import React from 'react';
import Image from 'next/image'; 
import Hero1 from '../../assets/images/hero1.webp';
import Hero2 from '../../assets/images/Hero2.png';

const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${Hero1.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    };
    return (
        <section id="Welcome">
            <div className="Hero-section">
                <div className="container-fluid px-3 px-xl-5">
                    <div className="row pb-4">
                        <div className="col-lg-6">
                            <div className='hero-content'>
                                <h1>Elegant Living</h1>
                                <h2>Modern Housing</h2>
                            </div>

                        </div>
                        <div className="col-lg-6 align-items-center d-flex">
                            <div className='hero-content-text'>
                                <p className='hero-text'>A fully furnished turnkey apartment for rent.
                                    Perfect for holidays or short and long term monthly renting.
                                    This is a spectacular, luxury furnished, business rental flat,
                                    located near the city center of Almere, The Netherlands.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='Heroimage1 d-flex justify-content-center align-items-end'
                        style={heroStyle}>
                    </div>
                </div>
            </div>
            <div className='almera-info'>
                <div className="container-fluid px-3 px-xl-5">
                    <div className="row">
                        <div className="col-lg-4 px-1">
                            <div className='almera-title'>
                                <h2>Apartment-Almere</h2>
                            </div>

                        </div>
                        <div className="col-lg-8 align-items-center d-flex px-1">
                            <div className='hero-content-text'>
                                <p className='hero-text'><strong>Almere: A modern and green city </strong> 
                                Almere, the youngest city in the Netherlands, is known for its modern architecture 
                                and green surroundings. The city offers a wide range of amenities, including shops, 
                                restaurants, and recreational opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-image2'>
                
                <Image src={Hero2} alt="Description for the second hero image" className='w-100 img-fluid' />
            </div>
        </section>
    );
};

export default Hero;
