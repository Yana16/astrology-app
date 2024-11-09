import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Points extends Component {
  render() {
    return (
      <Container className="purpose pb-5">
        <h2 class="text-center text-uppercase pb-5 pt-5 aboutme">Якщо Ви:</h2>

        {/* <Row lg={6} className="text-center d-flex justify-content-around"> */}
        <Row lg={12} className="text-center">
          <Col lg={6} className="d-flex justify-content-around">
            <div className="goal_div col-10 mb-5">
              <i className="number">01</i>
              <p className="purpose_p">
                Вже перепробували але так і не отримали бажаного результату;
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-around">
            <div className="goal_div col-10 mb-5">
              <i className="number">02</i>
              <p className="purpose_p">
                Хотіли би знайти себе: запити по розслідуванню себе "хочу
                розібратися в собі, в своїх відчуттях, емоціях, в своєму житті",
                "хочу пізнати себе краще"
              </p>
            </div>
          </Col>
          <Row lg={6}>
            <Col lg={6} className="d-flex justify-content-around">
              <div className="goal_div col-10 mb-5">
                <i className="number">03</i>
                <p className="purpose_p">
                  Прагнете успішно запустити новий бізнес/проект і не прогоріти;
                </p>
              </div>
            </Col>

            <Col lg={6} className="d-flex justify-content-around">
              <div className="goal_div col-10 mb-5">
                <i className="number">04</i>
                <p className="purpose_p">
                  Не розумієте чому не має росту в доході, хоча пройшли багато
                  навчань;
                </p>
              </div>
            </Col>
          </Row>
          <Row lg={6}>
            <Col lg={6} className="d-flex justify-content-around">
              <div className="goal_div col-10 mb-5">
                <i className="number">05</i>
                <p className="purpose_p">
                  Хотіли би налагодити стосунки із батьками, партнером, на
                  роботі: конфлікти, роздратованість;
                </p>
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-around">
              <div className="goal_div col-10 mb-5">
                <i className="number">06</i>
                <p className="purpose_p">
                  Маєте проблеми із самореалізацією: не розумієте що хочете та
                  куди рухатися.
                </p>
              </div>
            </Col>
          </Row>

          <p2 className="mt-5">ТО ЧЕКАЮ ТЕБЕ НА БЕЗКОШТОВНУ ДІАГНОСТИКУ</p2>
          <p3>
            де ми разом намітимо план роботи і успішно стартанемо у нове життя!
          </p3>
        </Row>
      </Container>
    );
  }
}

export default Points;
