import React, { Component } from "react";
import ReactDOM from 'react-dom';

import {  Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup} from "react-bootstrap";
import validator, { field } from './validator'; 
//phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Name: field({value:'', name: 'Name', minLength: 2}),
      CellularPhone:  field({value: '', name: 'CellularPhone', pattern: /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-. ]?([0-9]{4})$/}),
      HowDidYouReachedUs:   field({value: '', name: 'HowDidYouReachedUs'}),
    };
       this.onInputChange = this.onInputChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    console.log(name, value);
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        ...validator(value, name, this.state[name].validations)
      }
    });
  }
  onSubmit(e) {
    
    const student = Object.assign({}, this.state);

    for(let key in student){
        const { value, validations } = student[key];

        const { valid, errors } = validator(value, key, validations);

        if(!valid){
            student[key].valid = valid;
            student[key].errors = errors;
        }
    }

    this.setState({...student});
    //Send data to somewhere 
    //...
    e.preventDefault();
  }
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
                          placeholder="Enter your Nam"
                         defaultValue={this.state.Name.value}
                           onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.Name.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
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
                          defaultValue={this.state.CellularPhone.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.CellularPhone.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
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
                          defaultValue={this.state.HowDidYouReachedUs.value}
                          onBlur={this.onInputChange}
                        >
                          <option value="">Select </option>
                          <option value="Advertisment">Advertisment</option>
                          <option value="News">News</option>
                          <option value="Friends">Friends</option>
                          <option value="Social Media">SocialMedia</option>
                        </Form.Control>
                      </InputGroup>
                      
                    </Form.Group>
                    {this.state.HowDidYouReachedUs.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
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
