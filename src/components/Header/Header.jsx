import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import { CenterTextHeader } from '../CenterText/CenterText';
import styles from './Header.module.scss';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master',
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export function Header() {
    const [artworks, setArtworks] = useState([]);
    const [galleryName, setGalleryName] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");

    useEffect(() => {
        client.getEntry('5AQvpE7kD17JrJAdfXWRgW')
            .then((entry) => {
                console.log("Entry data:", entry);
                setArtworks(entry.fields.artworks);
                setGalleryName(entry.fields.nameOfGallery);
                setBannerUrl(entry.fields.banner[0].fields.file.url);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const headerStyle = {
        backgroundImage: `url(${bannerUrl})`
    };

    return (
        <div className={styles.headerWrapper} style={headerStyle}>
            <h1>{galleryName}</h1>
        </div>
    );
}
