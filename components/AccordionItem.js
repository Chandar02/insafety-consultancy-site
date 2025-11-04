// components/AccordionItem.js
"use client"; // Required for click/toggle functionality

import { useState } from 'react';

// --- CRITICAL FIX: Ensure the component is correctly exported as default ---
export default function AccordionItem({ title, content, icon, index, activeIndex, setActiveIndex }) {
    const primaryColor = '#1f3e66';
    const accentColor = '#007bff';
    const isActive = index === activeIndex;

    const toggleAccordion = () => {
        setActiveIndex(isActive ? null : index);
    };

    return (
        <div style={{ marginBottom: '10px', border: `1px solid ${isActive ? accentColor : '#ddd'}`, borderRadius: '6px' }}>
            {/* Title Bar - Includes the Icon */}
            <button 
                onClick={toggleAccordion} 
                style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '15px 20px',
                    backgroundColor: isActive ? accentColor : 'white',
                    color: isActive ? 'white' : primaryColor,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s'
                }}
            >
                <span style={{ marginRight: '10px', fontSize: '1.2em' }}>
                    {icon} {/* Display the Icon/Emoji */}
                </span>
                {title}
                <span style={{ float: 'right', fontSize: '1.5em' }}>
                    {isActive ? '▲' : '▼'}
                </span>
            </button>
            
            {/* Content Area */}
            {isActive && (
                <div 
                    style={{ 
                        padding: '20px', 
                        backgroundColor: '#fff', 
                        borderTop: `1px solid ${accentColor}` 
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
}