import { Container, Row, Col } from "react-bootstrap";
import Antman from '.././assets/images/superhero/antman.jpg'
import Avenger from '.././assets/images/superhero/avenger.jpg'
import Batman from '.././assets/images/superhero/batman.jpg'
import Robinhood from '.././assets/images/superhero/robinhood.jpg'
import Spiderman from '.././assets/images/superhero/spiderman-cover.jpg'
import Superman from '.././assets/images/superhero/superman.jpg'
import Card from './../components/Cardfilm'
import './style.css';


const Superhero = () => {
    return (
        <div id="superhero" className="content">
            <Container className=' text-center '>
                <h1 className="text-light">Superhero</h1>

                <Row>
                    <Col>

                        <Card gambar={Antman} judul="Antman" />

                    </Col>

                    <Col>

                        <Card gambar={Avenger} judul="Avenger" />

                    </Col>

                    <Col>

                        <Card gambar={Batman} judul="Batman" />

                    </Col>


                </Row>




            </Container>
        </div>
    );
}

export default Superhero;