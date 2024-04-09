import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import client from '../ContentfulClient/Client';


export function Header() {
    const [galleryName, setGalleryName] = useState("");
    const [bannerUrls, setBannerUrls] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const entryId = import.meta.env.VITE_CONTENTFUL_ENTRY_ID; 

        client.getEntry(entryId)
            .then((entry) => {
                setGalleryName(entry.fields.nameOfGallery);
                setBannerUrls(entry.fields.banner.map(banner => banner.fields.file.url));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex(prevIndex => (prevIndex + 1) % bannerUrls.length);
        }, 8000); // Skift hvert 5. sekund

        return () => clearInterval(interval); // Ryd op når komponenten fjernes
    }, [bannerUrls]);

    return (
        <div className={styles.headerWrapper} style={{
            backgroundImage: `url(${bannerUrls[currentSlideIndex]})`,
            transition: 'background-image 3s ease-in-out' // Tilføj transition
        }}>
            <h1>{galleryName}</h1>
        </div>
    );
}
