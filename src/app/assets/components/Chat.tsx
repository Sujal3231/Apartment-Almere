'use client';

import { useState } from 'react';
import styles from './ChatWidget.module.css';

// SVG icons are defined as small, reusable components
const WhatsAppIcon = () => (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className={styles.colorElement} cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle>
        <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 0 4.39053 0 2.92702C0 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 0 2.23348 0C2.37307 0 2.51267 0 2.65226 0C2.93144 0 3.21063 0 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path>
        <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2"></path>
    </svg>
);

const MessengerIcon = () => (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className={styles.colorElement} cx="19.4395" cy="19.4395" r="19.4395" fill="#1E88E5"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 9.63934C0 4.29861 4.68939 0 10.4209 0C16.1524 0 20.8418 4.29861 20.8418 9.63934C20.8418 14.98 16.1524 19.2787 10.4209 19.2787C9.37878 19.2787 8.33673 19.1484 7.42487 18.8879L3.90784 20.8418V17.1945C1.56311 15.3708 0 12.6353 0 9.63934ZM8.85779 10.1604L11.463 13.0261L17.1945 6.90384L12.1143 9.76959L9.37885 6.90384L3.64734 13.0261L8.85779 10.1604Z" transform="translate(9.01854 10.3146)" fill="white"></path>
    </svg>
);

const ChatIcon = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-496 507.7 54 54" xmlSpace="preserve">
        <g><circle cx="-469" cy="534.7" r="27" fill="#A886CD"></circle></g>
        <path fill="#ffffff" d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"></path>
        <path fill="#808080" d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"></path>
        <path fill="#808080" d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"></path>
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="26" cy="26" rx="26" ry="26" fill="#A886CD"></ellipse>
        <rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="#ffffff"></rect>
        <rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="#ffffff"></rect>
    </svg>
);

// --- MAIN COMPONENT ---
const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Your chat channels as a data array
    const channels = [
        {
            name: 'WhatsApp',
            href: 'https://web.whatsapp.com/send?phone=31644034024&text=',
            icon: <WhatsAppIcon />,
        },
        {
            name: 'Facebook Messenger',
            href: 'https://messenger.com/t/1411951307/',
            icon: <MessengerIcon />,
        },
    ];

    return (
        <div className={`${styles.chatyWidget} ${isOpen ? styles.open : ''}`}>
            {/* This div contains the list of channels */}
            <div className={styles.chatyChannels}>
                <div className={styles.chatyChannelList}>
                    {channels.map((channel) => (
                        <div key={channel.name} className={styles.chatyChannel}>
                            <a 
                                href={channel.href} 
                                target="_blank" 
                                rel="nofollow noopener" 
                                aria-label={channel.name}
                                data-hover={channel.name}
                                className={styles.channelLink} // Class for the hover effect
                            >
                                <span className={styles.chatyIcon}>{channel.icon}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* This div contains the trigger button to open/close */}
            <div className={styles.chatyTrigger}>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className={styles.triggerButton}>
                    {isOpen ? <CloseIcon /> : <ChatIcon />}
                    <span className={styles.srOnly}>{isOpen ? 'Hide Chaty' : 'Open Chaty'}</span>
                </button>
            </div>
        </div>
    );
};

export default ChatWidget;