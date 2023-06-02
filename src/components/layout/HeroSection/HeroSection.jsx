import styles from './HeroSection.module.scss';
import { Abril_Fatface } from 'next/font/google';


const headerFont = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})


const HeroSection = ({ title, description }) => {
  return (
    <div className={styles.heroSection}>
      <h1 className={`${styles.h1} ${headerFont.className}`}>{title}</h1>
      <div className={styles.descriptionBox}>
        <p className={styles.p}>--- {description}</p>
      </div>
    </div>
  )
}

export default HeroSection