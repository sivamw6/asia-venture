import styles from './Header.module.scss';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Abril_Fatface } from 'next/font/google';


const headerFont = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Header() {
  return (
    
    <header>
      <div className={styles.navbar}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/" className={` ${headerFont.className} ${styles.navLogo}`}>Asia Venture</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className={`${styles.navContent} justify-content-end`} >

              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ourstory">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/privacypolicy">Privacy Policy</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown href="/destinations" title="Destinations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/destinations/japan">japan</NavDropdown.Item>
              <NavDropdown.Item href="/destinations/korea">south korea</NavDropdown.Item>
              <NavDropdown.Item href="/destinations/taiwan">taiwan</NavDropdown.Item>
              <NavDropdown.Item href="/destinations/thailand">thailand</NavDropdown.Item>
              <NavDropdown.Item href="/destinations/vietnam">vietnam</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


    </header>
  );
}

export default Header;