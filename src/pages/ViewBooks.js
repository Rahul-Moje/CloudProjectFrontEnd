
import { useState, useEffect } from "react"
import { API } from '../components/API';
import { CardGroup, Card, Container, Button, Row } from "react-bootstrap";

const axios = require('axios')

const ViewBooks = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        retrieveBackEndResponse().then(resp => {
            setBooks(resp.data)
            console.log('Data', resp)
        })
    }, []
    );


    const retrieveBackEndResponse = async () => {
        try {
            const resp = await axios.get(`${API}/viewBooks`);
            return resp
        } catch (err) {
            // Handle Error Here
            console.error(err);
            return "Something failed"
        }
    }

    return (
        <div className="mb-5 mt-5">
            <Container fluid="sm" className="mb-5 mt-5">

                {books.map(book => (
                    <Row className="justify-content-center"> 
                        <div className="h-100 d-inline-block mb-5" style={{width: '20%'}}>
                            <Card key={book.id} >
                                <Card.Img variant="top" src={book.image} height='10%' width='10%' />
                                <Card.Body>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>Authors- {book.author}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Available quantity - {book.availableQuantity}</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Row>
                ))}


            </Container>




        </div>
    )
}


export default ViewBooks