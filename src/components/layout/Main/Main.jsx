import { Container } from 'react-bootstrap';
import styles from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <Container className={styles.main}>
      { children }
    </Container>
  )
}

export default Main