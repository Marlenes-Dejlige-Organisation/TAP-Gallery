
import styles from './Gallery.module.scss';

import Girl1 from '../../assets/images/Rectangle 8.png';
import Girl2 from '../../assets/images/Rectangle 9.png';
import Girl3 from '../../assets/images/Rectangle 10.png';
import Girl4 from '../../assets/images/Rectangle 11.png';
import Girl5 from '../../assets/images/Rectangle 12.png';
import Girl6 from '../../assets/images/Rectangle 13.png';
import Girl7 from '../../assets/images/Rectangle 14.png';
import Girl8 from '../../assets/images/Rectangle 15.png';
import Girl9 from '../../assets/images/Rectangle 16.png';
import Girl10 from '../../assets/images/Rectangle 17.png';
import Girl12 from '../../assets/images/Rectangle 6.png';
import Girl11 from '../../assets/images/Rectangle 7.png';

export const myPhotos = [Girl1, Girl2, Girl3, Girl4, Girl5, Girl6, Girl7, Girl8, Girl9, Girl10, Girl11, Girl12];

export const Gallery = (props) => {
  return (<>
    <h2 className={styles.galh2}>FOLLOW US ON INSTAGRAM</h2>
    <div className={styles.gallery}>
      
      {props.data.map((item, key) => (
        <img key={key} src={item} alt={`Image ${key}`} />
      ))}
    </div></>
  );
};