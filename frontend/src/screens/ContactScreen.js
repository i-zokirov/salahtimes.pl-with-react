import React from "react";
import { Form,  Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from '../components/Message';
import { sendContactRequest } from "../actions/contactActions";

const ContactScreen = () => {
    const dispatch = useDispatch()
    const {error, loading, success} = useSelector(state => state.contactRequest)

    const formSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(sendContactRequest(e.target))
    }
    
    return loading ? <Loader/> : success ? <Message className="text-center" variant="success">Thank you, your message has been sent!</Message> : (
        <React.Fragment>
        <h2>Contact Form</h2>
        <Container style={{paddingTop: "20px"}}>
            {error && <Message>{error}</Message>}
            <Form onSubmit={formSubmitHandler}>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="user_name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="user_name" type="text" placeholder="Enter your full name" />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="user_email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="user_email" type="email" placeholder="Enter your email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" placeholder="Type your message here" as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary"  type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
        </React.Fragment>
    )
}

export default ContactScreen