import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import styles from './Header.module.scss';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master',
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export function Header() {
    const [galleryName, setGalleryName] = useState("");
    const [bannerUrls, setBannerUrls] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        client.getEntry('5AQvpE7kD17JrJAdfXWRgW')
            .then((entry) => {
                // console.log("Entry data:", entry);
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
        }, 5000); // Skift hvert 5. sekund

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
