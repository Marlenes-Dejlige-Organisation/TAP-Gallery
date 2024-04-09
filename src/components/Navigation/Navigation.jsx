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
        <li><a href='#newsletter' className={styles.NavLink}>CONTACT</a></li>
      </ul>
    </nav>
  );
};
