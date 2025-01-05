import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = Array.from(
        { length: 10 },
        (_, index) => `https://via.placeholder.com/600x${Math.floor(400 + Math.random() * 300)}?text=Image+${index + 1}`
    );

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <h1>Masonry Layout Gallery</h1>
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
