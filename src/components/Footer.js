import Logo from '../assets/images/bg/xxi.png';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} width='1200px' />
                        <p className='text-center text-light'>Container &copy; zz 22</p>

                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default Footer;