import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import styles from './Gallery.module.scss';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master',
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        client.getEntry('5AQvpE7kD17JrJAdfXWRgW')
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
