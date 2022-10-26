import { Container, Row, Col } from "react-bootstrap";
const Detailbatman = () => {
    return (
        <Container fluid className="bg-dark py-5">
            <Container >
                <Row>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>

                    <Col className="text-light ">Keterangan Film ini.
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium dignissimos itaque ab. Vero, reiciendis eius amet placeat odio debitis dolorum pariatur beatae error quibusdam qui. Suscipit earum doloremque incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vel doloribus, sit temporibus necessitatibus, iure consequuntur consectetur in expedita tempora, totam modi itaque adipisci similique? Quia fugiat itaque cum maiores!
                        </p>
                    </Col>

                </Row>

                <Row>
                    <Col className="text-light">Sinopsis

                        <h3 className="mt-5"></h3>
                        <hr />Di tahun keduanya sebagai Batman (Robert Pattinson), Bruce Wayne berjuang untuk menemukan tempatnya sebagai pemburu kejahatan. Dia menanamkan rasa takut pada mereka yang melakukan tindakan kriminal, akan tetapi dengan metodenya yang selalu main hakim sendiri.

                        Alasannya, karena dia masih belum mendapatkan kepercayaan dari orang-orang, kecuali Letnan James “Jim” Gordon (Jeffrey Wright) yang mengizinkan Batman menyelidiki TKP bersamanya. Kasus berikutnya yang harus ia hadapi adalah kasus pembunuhan dan korbannya adalah Walikota Don Mitchell Jr (Rupert Penry-Jones).

                        Orang yang dicurigai sebagai dalang dari pembunuhan tersebut adalah seseorang yang menyebut dirinya The Riddler (Paul Dano). Batman pun mulai mengumpulkan petunjuk yang ditinggalkan si pembunuh setelah ia melakukan aksinya.

                        Dengan bantuan Selina Kyle (Zoe Kravitz) yang menjadi pelayan di klub bos mafia Carmine Falcone (John Turturo), Batman bekerja untuk memecahkan misteri sebelum The Riddler dapat mengklaim korban berikutnya. Misteri yang membawanya pada rahasia besar tentang Gotham dan juga tentang keluarganya.
                    </Col>
                </Row>


            </Container>
        </Container >
    )
}

export default Detailbatman;