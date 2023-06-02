import Link from 'next/link';
import styles from './Footer.module.scss'

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className="container">
        <p className="text-right pr-5">
          &copy; {getCurrentYear()} Asia Venture 
        </p>
        <p>Images are provided by <Link className={styles.a} href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</Link></p>
      </div>
    </div>
  );
}

export default Footer;