import { Card } from 'react-bootstrap';
import './style.css';

const Cardfilm = (props) => {
    return (
        <Card>
            <Card.Img className='imgcard' id='p' variant="top" src={props.gambar} />
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <a href={props.judul} className="btn btn-primary">Go Watch {props.judul}</a>
            </Card.Body>
        </Card>
    )
}

export default Cardfilm;