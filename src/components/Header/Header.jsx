import { CenterTextHeader } from '../CenterText/CenterText'
import styles from './Header.module.scss'



export const Header = () => {
    return <header className={styles.headerWrapper} >
        <h1>Under the Moon</h1>
        <CenterTextHeader></CenterTextHeader>
        </header>
}