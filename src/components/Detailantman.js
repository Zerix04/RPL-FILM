import { Container, Row, Col } from "react-bootstrap";
const Detailantman = () => {
    return (
        <Container fluid className="bg-dark py-5">
            <Container >
                <Row>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fyt9JLKduDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Col>

                    <Col className="text-light ">Keterangan Film ini.
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium dignissimos itaque ab. Vero, reiciendis eius amet placeat odio debitis dolorum pariatur beatae error quibusdam qui. Suscipit earum doloremque incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel doloribus, sit temporibus necessitatibus, iure consequuntur consectetur in expedita tempora, totam modi itaque adipisci similique? Quia fugiat itaque cum maiores!
                        </p>
                    </Col>

                </Row>

                <Row>
                    <Col className="text-light">Sinopsis

                        <h3 className="mt-5"></h3>
                        <hr />Ant-Man mengisahkan tentang seorang pencuri insaf bernama Scott Lang (Paul Rudd) yang harus membantu seorang profesor sekaligus gurunya yang bernama Dr. Hank Pym (Michael Douglas).

                        Hank berhasil menciptakan sebuah serum yang bisa membuat tubuh pemakainya mengecil seperti semut. Akhirnya, Dr. Hank memberikan kesempatan kepada Scott untuk menebus semua kesalahannya dengan menjadi pahlawan bernama "Ant-Man" dengan bantuan serum tersebut.


                    </Col>
                </Row>


            </Container>
        </Container >
    )
}

export default Detailantman;