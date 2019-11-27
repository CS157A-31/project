import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Button> Create Group </Button>
        <Button> Create Event </Button>
        {/* <Jumbotron>
          <h2>Split the bill easier for everyone</h2>
          <p className="flow-text grey-text text-darken-1">
            A way to manage all your groups' trip finances
          </p>
          <div className="row s6">
            <Link
              to="/createGroup"
              style={{
                width: "170px",
                borderRadius: "5px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            ></Link>
          </div>
          <div className="row s6">
            <Link
              to="/createEvent"
              style={{
                width: "170px",
                borderRadius: "5px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              <Button> Create Event </Button>
            </Link>
          </div>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={50} className="text-wrapper">
            <h3 className="flow-text grey-text text-darken-1">About</h3>
            <p>Smart Group Financial allows (??)</p>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default HomePage;
