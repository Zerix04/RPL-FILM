import { Container, Row, Col } from "react-bootstrap";
import Joker from '.././assets/images/trending/joker.jpg'
import Dune from '.././assets/images/trending/dune.jpg'
import Everything from '.././assets/images/trending/everything.jpg'
import Infinite from '.././assets/images/trending/infinite.jpg'
import Lightyear from '.././assets/images/trending/lightyear.jpg'
import Morbius from '.././assets/images/trending/morbius.jpg'
import Card from './Cardfilm'

const Trending = () => {
    return (
        <div id="trending" className="content ">
            <Container className=' text-center'>
                <h1 className="text-light">Trending</h1>

                <Row className="mb-3">
                    <Col>

                        <Card gambar={Infinite} judul="Infinite" />

                    </Col>

                    <Col>

                        <Card gambar={Everything} judul="Everything" />

                    </Col>

                    <Col>

                        <Card gambar={Dune} judul="Dune" />

                    </Col>


                </Row>



            </Container>
        </div>
    );
}

export default Trending;