import { Container, Row, Col } from "react-bootstrap";
const Detaildune = () => {
    return (
        <Container fluid className="bg-dark py-5">
            <Container >
                <Row>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Col>

                    <Col className="text-light ">Keterangan Film ini.
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium dignissimos itaque ab. Vero, reiciendis eius amet placeat odio debitis dolorum pariatur beatae error quibusdam qui. Suscipit earum doloremque incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel doloribus, sit temporibus necessitatibus, iure consequuntur consectetur in expedita tempora, totam modi itaque adipisci similique? Quia fugiat itaque cum maiores!
                        </p>
                    </Col>

                </Row>

                <Row>
                    <Col className="text-light">Sinopsis

                        <h3 className="mt-5"></h3>
                        <hr />Sinopsis Dune kali ini menceritakan tentang perjalanan Duke Atreides (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat sumber spice (rempah-rempah).

                        Kekuatan spice yang luar biasa bisa membantu manusia berumur panjang, sangat cerdas, bahkan mampu menjelajahi luar angkasa dengan kecepatan cahaya.

                        Namun, mengingat Dune adalah tempat yang berbahaya, Duke membawa serta orang-orang kepercayaannya untuk menyelesaikan misi tersebut.

                        Nah, sinopsis Dune berikut ini akan membongkar keseruan akting Oscar Isaac, Timothee Chalamet, dan Rebecca Ferguson di film
                    </Col>
                </Row>


            </Container>
        </Container >
    )
}

export default Detaildune;