import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Picture from "./images/about.jpg";

class About extends Component {
  render() {
    return (
      <Container fluid className="about" id="about">
        <h2 className="text-general text-center pt-5 mb-5 aboutme">Про мене</h2>
        <Row className="d-flex">
          <Col
            lg="4"
            className="d-flex justify-content-center align-items-start"
          >
            <Image
              src={Picture}
              height={600}
              width={400}
              className="md- img-fluid about-img rounded mb-sm-5 shadow-sm p-3 mb-5 rounded shadow-lg p-3 mb-5"
            />
          </Col>
          <Col lg="7" className="text-format">
            <p className="h1 pb-5">
              Дипломований консультант по матриці долі та трансцендентній
              ведичній психології - випускниця Володимира Древса!
            </p>

            <p className="h1 pb-5">
              Моя мета — підтримати вас у досягненні життєвого балансу,
              фінансової стабільності та внутрішньої гармонії. Кожна
              консультація налаштована на ваші потреби та цілі, щоб забезпечити
              найкращі результати.
            </p>
            <p className="h1 pb-5">
              Я досліджую кілька напрямків — психологію, ведичну астрологію,
              матрицю долі та кармологію, що дає змогу розглядати вашу ситуацію
              з різних сторін і отримувати більш глибоке розуміння.
            </p>
            <p className="h1 pb-5">
              Понад 100 задоволених клієнтів та вирішених запитів!
            </p>
            <p className="h1 pb-5">
              Мої клієнти цінять легкість у спілкуванні зі мною і позитивний
              підхід до вирішення питань:
            </p>
            <p className="h1 pb-5">
              "НІ - фаталізму! ТАК - створенню життя мрії!"
            </p>

            <p className="h1 pb-5">
              За останні 4 роки змінила 7 видів діяльності, щоб знайти ідеальну
              роботу.
            </p>
            <p className="h1">Допоможу вам зробити це за 1 консультацію!!!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
