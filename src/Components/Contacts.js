import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Telegram from "./telegram.svg";
import Instagram from "./instagram.svg";
import Facebook from "./facebook.svg";

class Contacts extends Component {
  render() {
    return (
      <Container fluid className="contacts" id="contact">
        <Row>
          <h2 class="text-center text-uppercase pt-5 pb-5 aboutme">Контакти</h2>
        </Row>
        <Row className="col-12 pb-5 d-flex justify-content-center">
          <Col lg="2" className="text-center">
            <a href="https://t.me/iamilonakovpan">
              <Image src={Telegram} height="50" width="50" />
            </a>
          </Col>
          <Col lg="2" className="text-center">
            <a href="https://www.instagram.com/lymonna_voda/profilecard/?igsh=eXFvbHRpN2F3ZWhw">
              <Image src={Instagram} height="50" width="50" />
            </a>
          </Col>
          <Col lg="2" className="text-center">
            <a href="https://www.facebook.com/profile.php?id=100011067484828&mibextid=LQQJ4d">
              <Image src={Facebook} height="50" width="50" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contacts;
