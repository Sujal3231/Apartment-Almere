import React from 'react';
import Image from 'next/image';
import overview from '../../assets/images/kitchen.webp';

const Overview = () => {
    return (
        // The id="overview" allows the anchor link to scroll to this section
        <section id="overview">
            <div className="container-fluid px-3 px-xl-5">
                <div className='overview-section'>
                    <div className="row pb-4">
                        <div className="col-lg-5 px-0">
                            <div className='almera-title'>
                                <h2>Overview</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 align-items-center d-flex px-0">
                            <div className='hero-content-text'>
                                <p className='hero-text'>Discover this fully furnished, modern apartment in a prime location in Almere.
                                    Ideal for both short and long-term stays. The apartment features a comfortable bedroom,
                                    a stylish bathroom, and a fully equipped kitchen.
                                    Check out our service page for an overview of all available facilities.
                                    Feel free to contact us for more information or to schedule a viewing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row overview-card'>
                        <div className="col-xl-6 p-0 mb-4 mb-xl-0">
                            <a href="#slider-section">
                                <Image src={overview} alt="Kitchen" style={{ width: "100%", height: '100%' }} className="overview-card-image" />
                            </a>
                        </div>
                        <div className="col-xl-6 p-0">
                            <div className='overview-card-text'>
                                <div className='overview-card-with-price'>
                                    <div className="overview-card-price w-70 d-flex justify-content-center align-items-center">
                                        <div className="d-flex justify-content-center flex-column align-items-center">
                                            <h6 className='card-subtitle mb-2 text-center'>
                                                Sept 1 - Jun 30
                                            </h6>
                                            <p className='card-price'>
                                                €109
                                                <span>/night</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="overview-card-price w-70 d-flex justify-content-center align-items-center">
                                        <div className="d-flex justify-content-center flex-column align-items-center">
                                            <h6 className='card-subtitle mb-2 text-center'>
                                                Jul 1 - Aug 30
                                            </h6>
                                            <p className='card-price'>
                                                €119
                                                <span>/night</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="overview-card-price d-flex justify-content-center justify-md-content-between">
                                        <div className="vertical-divider pe-4">
                                            <h6 className='card-subtitle mb-2'>
                                                14+ days
                                            </h6>
                                            <p className='card-price mt-4 lh-1-3rem'>
                                                10%
                                                <span>off</span>
                                            </p>
                                        </div>
                                        <div className="ps-4">
                                            <h6 className='card-subtitle mb-2'>
                                                30+ days
                                            </h6>
                                            <p className='card-price mt-4 lh-1-3rem'>
                                                20%
                                                <span>off</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='includes'>
                                    <h1> Included </h1>
                                    <p>Enjoy a worry-free stay with all the comforts:
                                        energy, water, heating, high-speed Wi-Fi, soft bed,
                                        bath, and kitchen linens, luxurious bathrobes,
                                        a delightful welcome package on request.
                                    </p>
                                </div>
                                <div className='includes'>
                                    <h1> Contact </h1>
                                    <p>Are you curious about the prices for long-term rentals?
                                        Please contact us, we are happy to help you and see what suits you best
                                    </p>
                                </div>
                                <div className='d-block d-sm-flex'>
                                    <div className='btn-overview-card d-flex align-items-center justify-content-center ms-0 ms-sm-2'>
                                        <a href='#' className='btn'> Check Our Reviews</a>
                                    </div>
                                    <div className='white-btn d-flex align-items-center justify-content-center ms-0 ms-sm-2'>
                                        <a href='#' className='text-decoration-none'>
                                            <button className='btn'> View Availability </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
