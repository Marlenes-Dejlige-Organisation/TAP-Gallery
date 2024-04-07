import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import styles from './Description.module.scss';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master',
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export const Description = () => {
    const [description, setDescription] = useState("");
    const [additionalText, setAdditionalText] = useState("");

    useEffect(() => {
        client.getEntry('5AQvpE7kD17JrJAdfXWRgW')
            .then((entry) => {
                setDescription(entry.fields.description.content[0].content[0].value);
                setAdditionalText(entry.fields.description.content[1].content[0].value);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.headerInfo}>
                <h2>{description}</h2>
                <h3>{additionalText}</h3>
            </div>
        </section>
    );
}
