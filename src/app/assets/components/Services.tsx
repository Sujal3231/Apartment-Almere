'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Icon1 from "../images/icon1.png"
import Icon2 from "../images/icon2.png"
import Icon3 from "../images/icon3.png"
import Icon4 from "../images/icon4.png"
import Icon5 from "../images/icon5.png"
import Icon6 from "../images/icon6.png"


// A small component to handle the "Read More" logic
const ReadMore = ({ text, fullText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    if (!fullText) {
        return <p>{text}</p>;
    }

    return (
        <p>
            {text}
            <span style={{ display: isExpanded ? 'inline' : 'none' }}>{fullText}</span>
            <strong onClick={toggleReadMore} className="read-more-btn" style={{ cursor: 'pointer', marginLeft: '5px' }}>
                {isExpanded ? '...Read Less' : '...Read More'}
            </strong>
        </p>
    );
};

const servicesData = [
    {
        icon: Icon1,
        title: "Welcome Package",
        description: "Tea, coffee, sugar, coffee creamer, bread, butter and marmalade,",
        moreText: " cereal, milk, soup, soda, chocolates, snacks, salt, pepper and spices, pedal bin bags, dishcloths, scourer, washing up liquid and washing up tablets, detergent, cleaning detergent, hand soap and toilet paper.",
        cost: ""
    },
    {
        icon: Icon2,
        title: "Grocery Shopping",
        description: "We shop cost-conscious for groceries are put these down upon arrival. A list can be given.",
        cost: "€ 20 + shopping expenses"
    },
    {
        icon: Icon3,
        title: "Cleaning Service",
        description: "Additional cleaning can be arranged.",
        cost: "€ 45 for two hours"
    },
    {
        icon: Icon4,
        title: "Laundry",
        description: "Washing and ironing",
        cost: "€ 7,50 per kilogram"
    },
    {
        icon: Icon5,
        title: "Dry Clean Service",
        description: "Take & pick up personal clothing to dry cleaning.",
        cost: "€ 10 plus dry cleaning expenses"
    },
    {
        icon: Icon6,
        title: "Taxi",
        description: "Amsterdam Airport Schiphol Service We can arrange a taxi for picking you up",
        moreText: " from the airport or bring you to the airport.",
        cost: "taxi expenses"
    }
];
const Services = () => {
    return (
        <section>
            <div className="container-fluid px-3 px-xl-5">
                <div className="services-section">
                    <div className='almera-title'>
                        <h1 className="text-center pb-2 pb-md-4">Services</h1>
                    </div>
                    <div className="services-cards">
                        {servicesData.map((service, index) => (
                            <div className="card" key={index}>
                                <div className="icon pb-3">
                                    <Image src={service.icon} alt={`${service.title} icon`} height={60} width={60} />
                                </div>
                                <h3>{service.title}</h3>
                                <ReadMore text={service.description} fullText={service.moreText} />
                                {service.cost && (
                                    <span className="cost">
                                        Cost: <strong>{service.cost}</strong>
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;