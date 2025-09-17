import React from 'react';
import Image from 'next/image';

// Assuming these images are in a folder relative to this component
import Amsterdam from '../images/amsterdam.webp';
import canal from '../images/canal.webp';
import logo from '../images/circlelogo.png';
import museum from '../images/museum.webp';
import national from '../images/national.webp';

const locationCardsData = [
    {
        id: 1,
        className: 'location-card-1',
        imageUrl: Amsterdam,
        logoUrl: logo,
        title: 'Oude Kerk Amsterdam',
        description: '41.1 km Away | 39 min by car',
        gridClasses: 'col-lg-6'
    },
    {
        id: 2,
        className: 'location-card-2',
        imageUrl: canal,
        title: 'Canal Cruises',
        description: '34 km Away | 34 min by car',
        gridClasses: 'col-lg-6 pt-4 pt-lg-0'
    },
    {
        id: 3,
        className: 'location-card-3 mt-4',
        imageUrl: national,
        title: 'National Maritime Museum',
        description: '39.2 km Away | 32 min by car',
        gridClasses: 'col-lg-12'
        
    }
];

// Data for the fourth card, previously hardcoded
const goghMuseumData = {
    id: 4,
    className: 'location-card-4',
    imageUrl: museum,
    logoUrl: logo, // Assuming it uses the same logo
    title: 'Gogh Museum',
    description: '36.8 km Away | 39 min by car'
};


const Location = () => {
    return (
        <section id="location">
            <div className="container-fluid px-3 px-xl-5">
                <div className="location-section">
                    <div className="row pb-5 ps-3">
                        <div className="col-lg-5 p-0">
                            <div className="overview-title">
                                <h2>Great Location</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 p-0">
                            <p className="apt-alemere-desc"></p>
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '340px', overflow: 'hidden', width: '100%', maxWidth: '100%',display: 'inline-block'}} className="mb-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.3198636108295!2d5.24044617652556!3d52.38275157202555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c61707ec2b17b1%3A0x6301320889483e90!2sSamuel%20Esmeijerstraat%2015%2C%201318%20CA%20Almere%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1748942280398!5m2!1sen!2sin"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="map-img"
                            title="Location Map"
                        ></iframe>
                        <div className="map-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                        <a href="https://www.google.com/maps/@52.3827835,5.2433703,3a,75y,285.65h,80.49t/data=!3m7!1e1!3m5!1s-ufwLMMazoCZj3GWS8GSjQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.509363204724835%26panoid%3D-ufwLMMazoCZj3GWS8GSjQ%26yaw%3D285.6515692887851!7i16384!8i8192?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer">
                            <button className="btn">
                                View Local Experience on Map
                            </button>
                        </a>
                    </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                {locationCardsData.map(card => (
                                    <div className={card.gridClasses} key={card.id}>
                                        {/* CORRECTED: Use .src property for background images */}
                                        <div className={`${card.className} d-flex justify-content-end flex-column`} style={{ backgroundImage: `url('${card.imageUrl.src}')` }}>
                                            {card.logoUrl && (
                                                <Image src={card.logoUrl} height={150} width={150} alt="Logo" className="first-center-logo img-fluid d-block d-lg-none" />
                                            )}
                                            <h2>{card.title}</h2>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${goghMuseumData.className} d-flex justify-content-end flex-column`} style={{ backgroundImage: `url(${goghMuseumData.imageUrl.src})` }}>
                                <div>
                                    <Image src={goghMuseumData.logoUrl} height={150} width={150} alt="Gogh Museum Logo" className="center-logo img-fluid" />
                                </div>
                                <h2>{goghMuseumData.title}</h2>
                                <p>{goghMuseumData.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-section">
                        <div className="row mt-b mb-md-4">
                            <div className="row mt-3 mt-md-4">
                                <div className="col-md-6">
                                    <p className="map-desc">This apartment in Almere, part of Holland Apartments, offers a truly great location. Thanks to the excellent connections, Amsterdam, with its bustling centre, is only a half-hour drive by car or train.</p>
                                    <p className="map-desc">For your daily needs, you will find a supermarket, ATM, post office and various other shops within walking distance. The central location in relation to the highway and public transport makes traveling extremely easy. </p>
                                </div>
                                <div className="col-md-6">
                                    <p className="map-desc">Not only is Amsterdam within easy reach; Zeewolde and Lelystad can also be reached in half an hour. Schiphol Airport by train to Almere is only 47 minutes. and the historic city of Utrecht are only 45 kilometres away.</p>
                                    <p className="map-desc">Because all parts of the Netherlands can be reached within an acceptable travel time by car or public transport, exploring this beautiful country from this apartment is a breeze.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
