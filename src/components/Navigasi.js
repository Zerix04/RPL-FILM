import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigasi() {
    return (
        <Navbar className='navbar shadow' fixed='top' expand="lg" >
            <Container >
                <Navbar.Brand href="#home" className='text-light' ><b>RPL FILM</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link href={'/#header'} className='text-light nav-link'>Home</Nav.Link>
                        <Nav.Link href={'/#trending'} className='text-light nav-link'>tranding</Nav.Link>
                        <Nav.Link href={'/#superhero'} className='text-light nav-link'>Superhero</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigasi;