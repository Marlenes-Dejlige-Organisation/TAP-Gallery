import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master', 
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
  })

export const Navigation = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    client.getEntry('5AQvpE7kD17JrJAdfXWRgW') // Erstatt 'your_entry_id' med det faktiske ID for dit entry
        .then((entry) => {
            console.log("Entry data:", entry);
            setLogoUrl(entry.fields.logo.fields.file.url);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}, []);

  return (
    <nav className={styles.navWrapper}>
      
      <div className={styles.logo}>
            <img src={logoUrl} alt="Logo" />
        </div>
      <ul>
        
        <li><NavLink to="/"className={styles.NavLink}>HJEM</NavLink></li>
        <li><NavLink to="/about"className={styles.NavLink}>OM</NavLink></li>
        <li><NavLink to="/contact"className={styles.NavLink}>KONTAKT</NavLink></li>
        <li><NavLink to="/products"className={styles.NavLink}>KONCEPTER</NavLink></li>
      </ul>
    </nav>
  );
};
