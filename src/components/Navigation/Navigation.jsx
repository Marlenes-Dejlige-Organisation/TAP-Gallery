import styles from './Navigation.module.scss'



export const Navigation = () => {
    return <nav className={styles.navWrapper} >
       <a href="#" className={styles.menuItem}>HJEM</a>
      <a href="#" className={styles.menuItem}>KONCEPTER</a>
      <a href="#" className={styles.menuItem}>UTM</a>
      <a href="#" className={styles.menuItem}>LOYALTY</a>
      <a href="#" className={styles.menuItem}>OM</a>
      <a href="#" className={styles.menuItem}>KONTAKT</a>
     
        </nav>
}