import React, { useState } from 'react';
import './Gallery.css';

// Importing images directly
import img1 from '../1.png';
import img2 from '../2.png';
import img3 from '../3.png';
import img4 from '../4.png';
import img5 from '../5.png';

import img7 from '../7.png';
import img8 from '../8.png';
import img9 from '../9.png';


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Manually defined paths for imported images
    const images = [img1, img2, img3, img4, img5,  img7, img8, img9];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <h1>Booksnaps</h1>
            <div className="masonry-layout">
                {images.map((image, index) => (
                    <div key={index} className="masonry-item">
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                            className="masonry-image"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
