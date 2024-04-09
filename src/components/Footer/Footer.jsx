import styles from './Footer.module.scss';
import client from '../ContentfulClient/Client';
import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [adress, setAdress] = useState("")

  useEffect(() => {
    const entryId = import.meta.env.VITE_CONTENTFUL_ENTRY_ID;

    client
      .getEntry(entryId)
      .then((entry) => {
        setLat(entry.fields.location.lat);
        setLong(entry.fields.location.lon);
        setAdress(entry.fields.adress)
        
      })
      .catch((error) => {
        console.error("Error fetching data?", error);
      });
  }, []);

  return (
    <footer className={styles.footerWrapper} id="newsletter">
      <div className={styles.subscribeSection}>
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <div className={styles.inputFields}>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
        </div>
        <button>SIGN UP</button>
      </div>


<div></div>
<div className={styles.find}>
        <h4>FIND US HERE {adress}</h4>
        <div className={styles.mapContainer}>
          <iframe
            title="Location"
            width="100%"
            height="50%"
            frameborder="0" style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${lat},${long}&output=embed`}
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className={styles.findUsSection}>
        <h4>WHO DID THIS?</h4>
        <div className={styles.contactInfo}>
          <p>Marlene</p>
        </div>

        <div className={styles.return}>
          <h3>Return to top</h3>
          <div className={styles.socialLinks}>
            <a href="#"></a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};
