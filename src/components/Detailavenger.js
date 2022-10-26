import { Container, Row, Col } from "react-bootstrap";
const Detailavenger = () => {
    return (
        <Container fluid className="bg-dark py-5">
            <Container >
                <Row>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Col>

                    <Col className="text-light ">Keterangan Film ini.
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium dignissimos itaque ab. Vero, reiciendis eius amet placeat odio debitis dolorum pariatur beatae error quibusdam qui. Suscipit earum doloremque incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel doloribus, sit temporibus necessitatibus, iure consequuntur consectetur in expedita tempora, totam modi itaque adipisci similique? Quia fugiat itaque cum maiores!
                        </p>
                    </Col>

                </Row>

                <Row>
                    <Col className="text-light">Sinopsis

                        <h3 className="mt-5"></h3>
                        <hr />Ketika musuh yang tak terduga muncul, mengancam keselamatan dan keamanan dunia, Nick Fury, direktur Badan Perdamaian Internasional, dikenal sebagai S.H.I.E.L.D. , membutuhkan tim untuk menyelamatkan dunia dari bencana. Usaha perekrutan pun dimulai Iron Man, Captain America, Hulk, Thor, Black Widow dan Hawkeye dikumpulkan untuk menaklukkan Dewa Kehancuran, Loki, dalam usahanya menghancurkan bumi. Dengan semua gabungan kekuatan, tugas nampak lebih mudah. Namun kenyatannya tidak demikian! Para pahlawan super justru saling melawan satu sama lain Hulk melawan Captain America, siapa yang akan menang? Apakah Iron Man dapat mengalahkan kekuatan super milik Thor? Bagaimana para pahlawan super ini secara bersama-sama menghadapi bencana, melindungi masyarakat dan yang terpenting,
                    </Col>
                </Row>


            </Container>
        </Container >
    )
}

export default Detailavenger;