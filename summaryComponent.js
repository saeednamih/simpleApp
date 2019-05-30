import React from 'react'
import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";

class SummaryComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        // const {title,catagory,date,where}=this.props.event
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h2>show  contact </h2></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>name : {this.props.Name}</ListGroup.Item>
                                <ListGroup.Item>Cellular Phone : {this.props.CellularPhone}</ListGroup.Item>
                                <ListGroup.Item> How Did You Reached Us:{this.props.HowDidYouReachedUs}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SummaryComponent