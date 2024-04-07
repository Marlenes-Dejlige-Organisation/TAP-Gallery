import styles from './Main.module.scss'
import { CenterTextSection, CenterTextSection2, CenterTextSection3 } from '../CenterText/CenterText'

import {Gallery, myPhotos} from '../Gallery/Gallery'
import { Description } from '../Description/Description';
 

export const Main = () => {
  return (
    <main className={styles.mainWrapper}>
      <Description/>
      <div className={styles.articles}>
        <CenterTextSection2 />
        <CenterTextSection3 />
      </div>
      <div>
        <Gallery data={myPhotos}/>
      </div>
    </main>
  );
}
