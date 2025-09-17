'use client';
import React, { useState } from 'react';

// Data for all amenities, organized by category
const amenitiesData = {
    'living-room': [
        'High-speed internet', 'LCD Television', 'Satellite Receiver', 'Home Cinema Set',
        'Two sideboards', 'Armchair', 'Coffee table', 'Reading lamp', 'Decorations',
        'Two dining chairs', 'Dining table (90/180 x 90)', 'Table lamp', 'Bedroom',
        'LCD Television', 'Clock radio'
    ],
    'kitchen': [
        'Potato peelers', '2 peeling knives', '1 Bottle opener/ corkscrew', '1 Pair of scissors',
        '2 Cutting knives', '1 Bread knife', '1 Potato/ vegetable/ sauce spoon', '1 Salad spoon',
        '4 Wooden spoons', '1 Cutting board', '3 Stands', '1 Cheese slicer', '1 Whisk',
        '1 Can opener', '1 Garlic press', '2 Spatulas', '1 Skimmer', '1 Potato masher',
        '2 Serving spoons', '4 Dining knives/ forks/ spoon', '4 Dessert knives/ forks/ spoons',
        '4 Pastry forks', '8 Coffee spoons', '4 Dinner plates', '4 Dessert plates',
        '4 Soup bowls', '4 Cereal bowls', '1 Water/ juice jug', '2 Salad bowls',
        '3 Snack bowls', '4 Tea glasses', '4 Coffee mugs', '4 Beer glasses',
        '4 Water/ soda glasses', '4 Wine glasses', '4 Cups and saucers', '1 Soup pot',
        '2 Oven dishes', '3 Cooking pans', '1 Soup pan', '2 Frying pans', '1 Sauce pan',
        '1 Strainer', '1 Teapot', '1 Coffee/ tea/ sugar tin', '1 Measuring cup',
        '3 Microwave boxes', '1 Senseo coffee maker', '1 Water boiler', '1 Coffee pad holder',
        '1 Dishwashing brush', '1 Hand soap dispenser', '1 Bucket', '1 Dustpan and brush',
        '1 Toaster', 'Pedal bin bags', 'Dishwashing detergent', 'Cleaning detergent', 'Salt',
        'Pepper', 'Garlic', 'Curry', 'Nutmeg', 'Parsley', 'French mix', 'Red pepper'
    ],
    'bedroom': [
        'LCD Television', 'Satellite receiver', 'Clock radio', 'Reading lamps', 'Decoration',
        'All bed linens', 'Pillows', 'Duvets (all season)', 'Wardrobe', 'Hangers', 'Cupboards'
    ],
    'bathroom': [
        'Iron', 'Ironing board', 'Radiator', 'Thermostatic shower tap', 'Adjustable shower head holder',
        'Fixed shower head holder', 'Shelved toilet', 'Toilet seat', 'Toilet brush', 'Toilet paper',
        'Clothes hook', 'Fitted washbasin', '2 Shelves', 'Mirror', 'Hand soap dispenser',
        '2 Outlets 220V', 'Hairdryer', 'Towel hook', 'Pedal bin', 'Washing machine',
        'Wash detergent', 'Dryer', 'Clothes basket'
    ]
};

const Amenities = () => {
    const [activeTab, setActiveTab] = useState('living-room');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    // Get the keys from the data object to create tabs dynamically
    const tabs = Object.keys(amenitiesData);

    return (
        <section>
            <div className="amenities">
                <div className='amenities-section'>
                    <h1 className="amenities-title text-white">Amenities</h1>
                    <div className="tab-container">
                        {tabs.map(tabId => (
                            <button
                                key={tabId}
                                className={`tab ${activeTab === tabId ? 'active' : ''}`}
                                onClick={() => handleTabClick(tabId)}
                            >
                                {/* Capitalize the first letter and replace hyphen with space for display */}
                                {tabId.charAt(0).toUpperCase() + tabId.slice(1).replace('-', ' ')}
                            </button>
                        ))}
                    </div>

                    <div className="features-container">
                        {tabs.map(tabId => (
                            <div
                                key={tabId}
                                className="features"
                                style={{ display: activeTab === tabId ? 'block' : 'none' }}
                            >
                                <ul className="amenities-grid">
                                    {amenitiesData[tabId].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
