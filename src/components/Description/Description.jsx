import React, { useState, useEffect } from 'react';
import styles from './Description.module.scss';
import client from '../ContentfulClient/Client';



export const Description = () => {
    const [description, setDescription] = useState("");
    const [additionalText, setAdditionalText] = useState("");

    useEffect(() => {
        const entryId = import.meta.env.VITE_CONTENTFUL_ENTRY_ID; 

        client.getEntry(entryId)
            .then((entry) => {
                setDescription(entry.fields.description.content[0].content[0].value);
                setAdditionalText(entry.fields.description.content[1].content[0].value);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <section id='om' className={styles.sectionWrapper}>
            <div className={styles.headerInfo}>
                <h2>{description}</h2>
                <h3>{additionalText}</h3>
            </div>
        </section>
    );
}
