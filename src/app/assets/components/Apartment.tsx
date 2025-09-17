'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// --- (Your image imports remain the same) ---
import kitchenImg from '../../assets/images/kitchen.webp';
import bedroomImg from '../../assets/images/bedroom.webp';
import bathroomImg from '../../assets/images/bathroom.webp';
import garden from '../../assets/images/garden.webp';
import hall from '../../assets/images/hall.webp';
import livingroom from '../../assets/images/livingroom.webp';
import laundry from '../../assets/images/laundry.webp';
import dining from '../../assets/images/dining.webp';
import right from '../../assets/images/list-style-arrow.svg';
import arrowLeftIcon from '../../assets/images/left-arrow-img.svg';
import arrowRightIcon from '../../assets/images/right-arrow-img.svg';


const slides = [
    { id: 1, image: kitchenImg, title: 'Kitchen', features: ['Smart Design', 'Microwave Oven', 'Refrigerator', 'Dish Washer'] },
    { id: 2, image: garden, title: 'Garden Corner', features: ['Quiet Neighborhood', 'Lighting', 'Lawn Furniture'] },
    { id: 3, image: hall, title: 'Hall', features: ['Relax & Enjoy', 'Home Theater Set', 'Wi-Fi Router', 'Satellite Decoder'] },
    { id: 4, image: bedroomImg, title: 'Bedroom', features: ['Feel At Home', 'Reclining Bed', 'Wired Internet'] },
    { id: 5, image: livingroom, title: 'Living Room', features: ['Relaxing Atmosphere', 'Natural Light'] },
    { id: 6, image: bathroomImg, title: 'Bathroom', features: ['Elegant Living', 'Quality Ceramics', 'Anti-Slip Tiles'] },
    { id: 7, image: laundry, title: 'Laundry Area', features: ['Fully Featured', 'Miele Washer & Dryer', 'Natural Light'] },
    { id: 8, image: dining, title: 'Dining Room', features: ['Fine Dinning', 'Fully Equipped', 'Cozy Space'] },
];

const Apartment = () => {
    const [centerIndex, setCenterIndex] = useState(1);
    const slideRefs = useRef([]);

    useEffect(() => {
        if (slideRefs.current[centerIndex]) {
            slideRefs.current[centerIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [centerIndex]);

    const handleSelectSlide = (index) => {
        setCenterIndex(index);
    };

    const prev = () => {
        if (centerIndex > 0) {
            setCenterIndex(centerIndex - 1);
        }
    };

    const next = () => {
        if (centerIndex < slides.length - 1) {
            setCenterIndex(centerIndex + 1);
        }
    };

    return (
        <section id="apartment">
            <div className="Apartment-slider-section">
                <h1>Explore Apartment Amenities</h1>

                <div className="slider">
                    {slides.map((slide, i) => {
                        const isCenter = i === centerIndex;
                        return (
                            <div
                                ref={(el) => (slideRefs.current[i] = el)}
                                key={slide.id}
                                className={`img ${isCenter ? 'is-center' : ''}`}
                                onClick={() => handleSelectSlide(i)}
                                title={slide.title}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill // Use `fill` to make the image responsive to its container
                                    sizes="(max-width: 768px) 80vw, 736px" // Helps Next.js optimize image loading
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 24,
                                        transition: 'height 0.5s ease',
                                    }}
                                    priority={i < 3} // Prioritize loading the first few images
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="slider-desc">
                    {/* CRITICAL FIX: Use the 'disabled' attribute */}
                    <button onClick={prev} className="nav-button" disabled={centerIndex === 0}>
                        <Image src={arrowLeftIcon} alt="Previous" width={48} height={48} />
                    </button>

                    <div className="desc-content">
                        <h2>{slides[centerIndex].title}</h2>
                        <ul className="amenities-list">
                            {slides[centerIndex].features.map((feature) => (
                                <li key={feature}>
                                    <img src={right.src} alt="" className="list-icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CRITICAL FIX: Use the 'disabled' attribute */}
                    <button onClick={next} className="nav-button" disabled={centerIndex === slides.length - 1}>
                        <Image src={arrowRightIcon} alt="Next" width={48} height={48} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Apartment;