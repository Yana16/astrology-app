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
          <Col lg="8">
            <p>
              Дипломований консультант по матриці долі та трансцендентній
              ведичній психології - випускниця Володимира Древса!
            </p>
            <p>
              Допомагаю людям зрозуміти себе, знайти свої сильні сторони та
              розкрити потенціал за допомогою унікального методу “Матриця Долі”.
            </p>
            <p>
              Моя мета — підтримати вас у досягненні життєвого балансу,
              фінансової стабільності та внутрішньої гармонії. Кожна
              консультація налаштована на ваші потреби та цілі, щоб забезпечити
              найкращі результати.
            </p>
            <p>
              В роботі з клієнтами використовую комплексний підхід, з’єднуючи
              основні психологічні школи і направлення з кармологією по вченням
              ГЕШЕ Майкла Роуча.
            </p>

            <p>
              Провела понад 100 сесій.
              <p>
                Мої клієнти цінять легкість у спілкуванні зі мною і позитивний
                підхід до вирішення питань:
                <p>"НІ - фаталізму! ТАК - створенню життя мрії!""</p>
              </p>
            </p>
            <p>
              За останні 4 роки змінила 7 видів діяльності, щоб знайти ідеальну
              роботу.
            </p>
            <p>Допоможу вам зробити це за 1 консультацію!!!.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
