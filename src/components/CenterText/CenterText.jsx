import styles from './CenterText.module.scss'
import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
  })

  export const CenterTextSection2 = () => {
    const [bannerUrl, setBannerUrl] = useState('');
    const [artistName, setArtistName] = useState("");
    const [descriptionOfArtist, setDescriptionOfArtist] = useState([]);

    useEffect(() => {
        client.getEntry('5WYDHCyhlUHtAMQ3c6kMaz')
            .then((entry) => {
                setArtistName(entry.fields.artistName);
                setBannerUrl(entry.fields.artwork[0].fields.file.url);
                setDescriptionOfArtist(entry.fields.descriptionOfArtist.content);
            })
            .catch((error) => {
                console.error("Error fetching data?", error);
            });
    }, []);

    return (
        <section className={styles.sectionWrapperP} style={{ backgroundImage: `url(${bannerUrl})` }}>
            <div className={styles.headerInfo}>
                <h2>{artistName}</h2>
                {descriptionOfArtist.map((paragraph, index) => (
                    <p key={index}>{paragraph.content[0].value}</p>
                ))}
                <button>Læs mere</button>
            </div>
        </section>
    );
}

export const CenterTextSection3 = () => {
    const [bannerUrl, setBannerUrl] = useState('');
    const [artistName, setArtistName] = useState("");
    const [descriptionOfArtist, setDescriptionOfArtist] = useState([]);

    useEffect(() => {
        client.getEntry('30LybItCNUYODN9mlMv7Ng')
            .then((entry) => {
                console.log("Entry data:", entry);
                setArtistName(entry.fields.artistName);
                setBannerUrl(entry.fields.artwork[0].fields.file.url);
                setDescriptionOfArtist(entry.fields.descriptionOfArtist.content);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <section className={styles.sectionWrapperP2} style={{ backgroundImage: `url(${bannerUrl})` }}>
            <div className={styles.headerInfo}>
                <h2>{artistName}</h2>
                {descriptionOfArtist.map((paragraph, index) => (
                    <p key={index}>{paragraph.content[0].value}</p>
                ))}
                <button>Læs mere</button>
            </div>
        </section>
    );
}

export const CenterTextHeader = () => {
    return <section className={styles.sectionWrapper} >
        <div className={styles.headerInfo}>
        <h2>HAIRSTYLIST OG FRISØR</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore in explicabo error praesentium a aperiam dicta ipsum sit itaque delectus id architecto, quod, quisquam iusto atque at? Fuga, enim sed.</p>
        </div>
        </section>
}

export const CenterTextSection = () => {
    return <section className={styles.sectionWrapperNB} >
        <div className={styles.newStyle}>
        <h2>UNDER THE MOON - NEW STYLE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsa laborum veritatis officiis, ea incidunt autem quas quae asperiores soluta reiciendis sint architecto ducimus doloribus voluptate maiores est quis optio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore in explicabo error praesentium a aperiam dicta ipsum sit itaque delectus id architecto, quod, quisquam iusto atque at? Fuga, enim sed.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi incidunt earum laudantium optio iste ratione aliquam, maxime assumenda cumque quaerat error aperiam dolore! Quo hic nobis quam quidem dicta aliquam.</p>
        <button>Læs mere</button>
        </div>
        </section>
}

