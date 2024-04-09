import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import client from '../ContentfulClient/Client';

export const Navigation = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const entryId = import.meta.env.VITE_CONTENTFUL_ENTRY_ID; 

    client.getEntry(entryId)
        .then((entry) => {
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
