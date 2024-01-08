import styles from './Footer.module.scss'



export const Footer = () => {
    return <footer className={styles.footerWrapper} >
              <div className={styles.subscribeSection}>
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <div className={styles.inputFields}>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
        </div>
        <button>SIGN UP</button>
      </div>
<div></div>
      <div className={styles.quickLinksSection}>
        <h4>QUICK LINKS</h4>
        <ul>
          <li>Hjem</li>
          <li>Om os</li>
          <li>Prisliste</li>
          <li>Booking</li>
          <li>Newsletter</li>
          <li>Kontakt</li>
        </ul>
        <div className={styles.followUs}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialLinks}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>

      <div className={styles.findUsSection}>
        <h4>FIND US</h4>
        <div className={styles.contactInfo}>
          <p>WhatsApp <br />+45 23 43 43 43</p>
         
          <p>Telefonnummer <br />+45 58 84 84 84</p>
         
          <p>Adresse <br />Supergatan 56 <br /> Oslo, Norway</p>
     
        </div>
      </div>
        </footer>
}