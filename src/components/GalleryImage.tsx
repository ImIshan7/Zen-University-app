import React from 'react';

interface GalleryImageProps {
    src: string;
    alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
    return (
        <div id="gallery" className="relative overflow-hidden rounded-lg aspect-video">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
        </div>
    );
};

export default GalleryImage;