'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// --- (Your image imports and data arrays remain the same) ---
import whatsapp from '../images/whatsapp.png';
import facebook from '../images/facebook.png';
import call from '../images/call.png';
import phone from '../images/contact-list-call.svg';
import location from '../images/location.png';
import mail from '../images/mail.png';
import logo from '../images/whitelogo.png';

const contactLinks = [
    { href: "...", icon: whatsapp, text: " WhatsApp" },
    { href: "...", icon: facebook, text: " Send us a message!" },
    { href: "...", icon: phone, text: " +31 6 44 034 024" },
    { href: "...", icon: mail, text: " info@apartment-almere.com" }
];
const socialIcons = [
    { href: "...", icon: facebook },
    { href: "...", icon: whatsapp },
    { href: "...", icon: mail }
];


const Contact = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
    });
    // NEW: State to track form status ('idle', 'submitting', 'sent')
    const [formStatus, setFormStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting'); // Show spinner and disable button

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        setFormStatus('sent'); // Show success message
        console.log("Form data submitted:", formData);
        
        // Hide the success message after a few seconds
        setTimeout(() => {
            setFormStatus('idle');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <section>
            <div className='container-fluid p-0'>
                <div className='Contactus' id="contact">
                    <div className='row me-0'>
                        <div className="col-lg-6 ps-0 pe-0 pe-lg-5">
                            <div className="footer-brand">
                                <Image src={logo} alt="Apartment Almere Logo" className="footer-logo pb-4 img-fluid" width={300} height={80} />
                            </div>

                            <div className="row">
                                {/* Contact Box */}
                                <div className="col-md-6">
                                    <div className="footer-box h-100">
                                        <div className="footer-box-title d-flex justify-content-between align-items-center">
                                            <h4 className='title-con'>Contact Us</h4>
                                            <Image src={call} height={35} width={35} alt="Contact Icon" />
                                        </div>
                                        <ul className="ps-0 pt-3 ms-0">
                                            {contactLinks.map((link, index) => (
                                                <li className="pb-2" key={index}>
                                                    <a href={link.href} className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer">
                                                        <Image src={link.icon} className="pe-2 pb-1" height={28} width={32} alt="" />
                                                        {link.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Address Box */}
                                <div className="col-md-6 pt-4 pt-md-0">
                                    <div className="footer-box h-100">
                                        <div className="footer-box-title d-flex justify-content-between align-items-center">
                                            <h4 className='title-con'>Address</h4>
                                            <Image src={location} height={35} width={35} alt="Address Icon" />
                                        </div>
                                        <p className="pt-4 pb-4 text-con">Samuel Esmeijerstraat 15<br />1318 CA ALMERE<br />Flevoland<br />Nederland</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="social-icons title-con   pt-5 d-none d-lg-block">
                                <h4 className="pb-3 mb-0">Follow Us</h4>
                                {socialIcons.map((social, index) => (
                                    <a href={social.href} className="text-decoration-none" target="_blank" rel="noopener noreferrer" key={index}>
                                        <Image src={social.icon} height={29} width={29} className="me-2 social-icon-image" alt="Social Icon" />
                                    </a>
                                ))}
                            </div>

                            <div className="footer-bottom pt-5 d-none d-lg-block">
                                <p>© Copyright 2025 | Apartment-Almere | All Rights Reserved</p>
                            </div>
                        </div>

                        <div className="col-lg-6 pe-0 ps-0 ps-lg-5 mt-4 mt-lg-0">
                            <div className="contact-form">
                                <h3>Ask Your Question</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* ... your form input fields ... */}
                                        <div className="col-md-6 ps-1 pe-1 pe-md-2">
                                            <p><input className="form-control text-white" placeholder="First Name" value={formData.firstName} type="text" name="firstName" onChange={handleChange} /></p>
                                        </div>
                                        <div className="col-md-6 pe-1 ps-1 ps-md-2">
                                            <p><input className="form-control text-white" placeholder="Last Name" value={formData.lastName} type="text" name="lastName" onChange={handleChange} /></p>
                                        </div>
                                        <div className="col-md-6 ps-1 pe-1 pe-md-2">
                                            <p><input className="form-control text-white" placeholder="Email Address" value={formData.email} type="email" name="email" onChange={handleChange} /></p>
                                        </div>
                                        <div className="col-md-6 pe-1 ps-1 ps-md-2">
                                            <p><input className="form-control text-white" placeholder="Phone Number" value={formData.phone} type="text" name="phone" onChange={handleChange} /></p>
                                        </div>
                                        <div className="col-12 px-1">
                                            <p><input className="form-control text-white" placeholder="Subject" value={formData.subject} type="text" name="subject" onChange={handleChange} /></p>
                                        </div>
                                        <div className="col-12 px-1">
                                            <p><textarea className="form-control text-white" placeholder="Write your Message" name="message" value={formData.message} onChange={handleChange}></textarea></p>
                                        </div>

                                        {/* UPDATED: Submit Button */}
                                        <div className="col-12 mt-3 mb-3 px-1">
                                            <button className="custom-btn" type="submit" disabled={formStatus === 'submitting'}>
                                                Send Message
                                            </button>
                                            {formStatus === 'submitting' && <span className="wpcf7-spinner"></span>}
                                        </div>
                                    </div>
                                    {/* UPDATED: Success Message */}
                                    {formStatus === 'sent' && (
                                        <div className="wpcf7-response-output">
                                            Thank you for your message. It has been sent.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
