'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react'; // <-- 1. Import useRef

// Import your assets
import logo from '../../assets/images/logo.png';
import Dutch from '../../assets/images/dutch.svg';
import English from '../../assets/images/english.svg';
import German from '../../assets/images/german.svg';


const Header = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');
    
    const collapseRef = useRef(null); // <-- 2. Create a ref for the collapsible div
    const togglerRef = useRef(null); // <-- 2. Create a ref for the toggler button

    const links = [
        { name: 'Welcome', href: '/#Welcome' },
        { name: 'Apartment', href: '/#apartment' },
        { name: 'Location', href: '/#location' },
        { name: 'Price', href: '/#overview' },
        { name: 'Reservation', href: '/reservation' },
        { name: 'Contact', href: '/#contact' },
    ];

    useEffect(() => {
        // This logic only runs on the homepage
        if (pathname !== '/') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        links.forEach((link) => {
            if (link.href.startsWith('/#')) {
                const sectionId = link.href.substring(2);
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.observe(section);
                }
            }
        });

        return () => observer.disconnect();
    }, [pathname, links]); // Added links dependency to useEffect

    // <-- 3. Create a handler to close the navbar
    const handleLinkClick = () => {
        // Check if the navbar is collapsed (i.e., the toggler button is visible)
        // and if the collapsible div is currently shown
        if (collapseRef.current && collapseRef.current.classList.contains('show')) {
            togglerRef.current.click();
        }
    };

    return (
        <nav className="navbar sticky-top navbar-expand-xl bg-white">
            <div className="container-fluid px-3 px-xl-5 bg-white">
                <a className="navbar-brand" href="/">
                    <Image src={logo} alt="Logo" width={250} className='img-fluid' />
                </a>

                <button
                    ref={togglerRef} // <-- 4. Attach ref to the button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCenteredLinks"
                    aria-controls="navbarCenteredLinks"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div ref={collapseRef} className="collapse navbar-collapse" id="navbarCenteredLinks"> {/* <-- 4. Attach ref to the div */}
                    <div className="row w-100 align-items-center">
                        <div className="col-12 col-xl-8 d-flex justify-content-start justify-content-xl-end">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center m-0">
                                {links.map((link) => {
                                    const isPageLinkActive = pathname === link.href;
                                    const isSectionLinkActive = pathname === '/' && activeSection === link.href.substring(2);
                                    const isActive = isPageLinkActive || isSectionLinkActive;

                                    return (
                                        <li key={link.name} className="nav-item me-2">
                                            <Link
                                                href={link.href}
                                                className={`nav-link ${isActive ? 'active' : ''}`}
                                                onClick={handleLinkClick} // <-- 5. Add onClick to the Link
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="col-12 col-xl-4 d-block d-xl-flex justify-content-xl-end align-items-center">
                            <div className="Wrapper-container">
                                <div className="flag-container">
                                    <a className="flg">
                                        <Image src={Dutch} alt="Dutch" width={24} height={24} className="flag" />
                                    </a>
                                    <a className="flg">
                                        <Image src={English} alt="English" width={24} height={24} className="flag" />
                                    </a>
                                    <a className="flg">
                                        <Image src={German} alt="German" width={24} height={24} className="flag" />
                                    </a>
                                </div>
                            </div>
                            <div className="btn-reserve ms-xl-3 mb-xl-0 mt-xl-0 btn-dark ms-0 mt-3 mb-3" >
                                <a href='#'>
                                    <button className='btn'>Reserve Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;