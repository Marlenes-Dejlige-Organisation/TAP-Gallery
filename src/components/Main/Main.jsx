import styles from './Main.module.scss';
import { CenterTextSection2, CenterTextSection3 } from '../CenterText/CenterText';
import { Gallery } from '../Gallery/Gallery';
import { Description } from '../Description/Description';
import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master',
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export const Main = () => {
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
        <main className={styles.mainWrapper}>
            <Description />
            <h4>Recent Exhibitions</h4>
            <div className={styles.articles}>
                
            
                <CenterTextSection2 />
                <CenterTextSection3 />
         
            </div>
            <div>
                <Gallery data={galleryImages} />
            </div>
        </main>
    );
};
