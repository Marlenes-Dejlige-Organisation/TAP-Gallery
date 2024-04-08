import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import client from '../ContentfulClient/Client';

export const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        const entryId = import.meta.env.VITE_CONTENTFUL_ENTRY_ID; 

        client.getEntry(entryId)
            .then((entry) => {
                const images = entry.fields.gallery.map(image => image.fields.file.url);
                setGalleryImages(images);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <h2 className={styles.galh2}>FOLLOW US ON INSTAGRAM</h2>
            <div className={styles.gallery}>
                {galleryImages.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} />
                ))}
            </div>
        </>
    );
};
