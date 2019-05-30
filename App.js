import React, { Component } from "react";
import ReactDOM from 'react-dom';

import {  Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup} from "react-bootstrap";
export default class App extends Component {


  render() {
    return (

        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>
                <Row>
                  <Col>
                    <Form.Group controlId="formControlName">
                      <Form.Label>Name</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>

                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="Name"
                          placeholder="Enter your Name  "

                        />
                      </InputGroup>

                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                    <Form.Group controlId="formControlCellularPhone">
                      <Form.Label>Cellular Phone</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
   
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="CellularPhone"
                          placeholder="Enter your CellularPhone"
                          aria-label="CellularPhone"

                        />
                      </InputGroup>
 
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col md={{ span: 10}}>
                    <Form.Group controlId="formControlHowDidYouReachedUs">
                      <Form.Label>How did you reached us</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
   
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          as="select"
                          name="HowDidYouReachedUs"

                        >
                          <option value="">Select </option>
                          <option value="Advertisment">Advertisment</option>
                          <option value="News">News</option>
                          <option value="Friends">Friends</option>
                          <option value="Social Media">SocialMedia</option>
                        </Form.Control>
                      </InputGroup>
                    </Form.Group>

                  </Col>
                
                </Row>
                <Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>

    );
  }
}
ReactDOM.render(<App/>,document.querySelector("#simpleApp"));
