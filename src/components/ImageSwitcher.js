import React, { useState, useEffect } from 'react';

const ImageSwitcher = ({ image1, image2, interval }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsHovered((prevHovered) => !prevHovered);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [interval]);



    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                height: 'auto',
                backgroundImage: `url(${image2})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}

        >
            <img
                src={image1}
                alt="Bild 1"
                style={{
                    width: '100%',
                    height: 'auto',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            />

        </div>
    );
};

export default ImageSwitcher;
