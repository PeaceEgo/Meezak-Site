import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({
    to,
    text,
    borderColor = '#CC5A71',
    textColor = '#CC5A71',
    hoverBgColor = '#CC5A71',
    hoverTextColor = 'white',
    className = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex">
            <Link
                to={to}
                className={`group px-8 py-3 border font-medium rounded hover:transition-colors duration-300 flex items-center ${className}`}
                style={{
                    borderColor: borderColor,
                    // color: textColor,
                    backgroundColor: isHovered ? hoverBgColor : 'transparent',
                    color: isHovered ? hoverTextColor : textColor,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span>{text}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ml-2 transform transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </Link>
        </div>
    );
};

export default CTAButton;