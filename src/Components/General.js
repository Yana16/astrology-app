import React from "react";
import { Container, Row, Button, FloatingLabel } from "react-bootstrap";
import Image1 from "./images/1-1-1.png";
import Image2 from "./images/general-1-2.png";
import Background from "./images/background.jpg";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputMask from "react-input-mask";

function General() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:4000/", {
      method: "post",
      body: JSON.stringify({ name, telephone, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    localStorage.setItem("users", JSON.stringify(result));
    console.log(result);
  };

  return (
    <Container
      fluid
      id="general"
      className="text-center justify-content-center"
    >
      <div id="bg">
        <img src={Background} class="img-fluid" alt="pic" />
      </div>
      <Row className="justify-content-center pb-5">
        <div class="row justify-content-center new">
          <div id="foto1">
            <img
              src={Image1}
              class="img-fluid"
              alt="pic"
              height="30%"
              width="30%"
            />
          </div>
          <div id="foto2">
            <img
              src={Image2}
              class="img-fluid "
              alt="pic"
              height="30%"
              width="30%"
            />
          </div>
        </div>
        <div class="row justify-content-center align-items-center co-lg-12 col-md-12 ">
          <div class="text">
            <h1 class="text-title">Ілона Ковпан</h1>
            <h2 className="text_h2">Матриця долі та психологія</h2>
            <p className="col-lg-8 d-inline-flex justify-content-center subText_h2 h1">
              Я допомагаю знайти ваші сильні сторони, розкрити фінансовий та
              особистий потенціал, створити гармонію у відносинах та подолати
              життєві труднощі за допомогою методу “Матриця Долі” та
              психологічних технік.
            </p>
          </div>
        </div>
        <Row className="col-8 col-lg-4 mx-auto mybutton">
          <Button
            className="my-btn btn btn-primary text-uppercase"
            onClick={handleShow}
          >
            Отримати консультацію
          </Button>
        </Row>
      </Row>

      <Modal show={show} onHide={handleClose} onSubmit={onSubmit} noValidate>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form className="col-lg-10 d-inline">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Ім'я</Form.Label>
              <Form.Control
                className="form-control-bg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Номер телефону</Form.Label>
              <Form.Control
                // className="form-control-bg "
                value={telephone}
                onChange={(e) => setTelephone(e.target.value.replace(/\D/, ""))}
                required
                type="tel"
                as={InputMask}
                mask="+380 (00) 000-00-00"
                placeholder="+380 (00) 000-00-00"
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label=""
              className="mb-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              type="text"
              placeholder=""
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>

            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleClose} type="submit">
                Відправити відгук
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default General;
