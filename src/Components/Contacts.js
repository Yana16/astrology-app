import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Telegram from "./images/telegram.svg";
import Instagram from "./images/instagram.svg";
import Facebook from "./images/facebook.svg";

class Contacts extends Component {
  render() {
    return (
      <Container fluid className="header shadow" id="contact">
        <Row>
          <h2 class="text-center text-uppercase pt-5 pb-5 nav-link">
            Контакти
          </h2>
        </Row>
        <Row className="justify-content-center">
          <Row className="col-6 pb-5 d-flex justify-content-center">
            <Col className=" col-4 col-sm-4 text-center">
              <a href="https://t.me/iamilonakovpan">
                <Image src={Telegram} height="60" width="60" />
              </a>
            </Col>
            <Col className=" col-4 col-sm-4 text-center">
              <a href="https://www.instagram.com/lymonna_voda/profilecard/?igsh=eXFvbHRpN2F3ZWhw">
                <Image src={Instagram} height="60" width="60" />
              </a>
            </Col>
            <Col className=" col-4 col-sm-4 text-center">
              <a href="https://www.facebook.com/profile.php?id=100011067484828&mibextid=LQQJ4d">
                <Image src={Facebook} height="60" width="60" />
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Contacts;
