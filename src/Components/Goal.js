import React, { Component } from "react";
import { Container, Card, Image, Row } from "react-bootstrap";
import Icon from "./thumb.svg";

class Goal extends Component {
  render() {
    return (
      <Container fluid className="info">
        <h2 className="text-general text-center pt-5 ">Моя ціль</h2>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset" }}
        >
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-10 mt-5 align-items-center flex-column">
              <Card.Text className="info-text">
                <p className="h1">
                  Своєю місією бачу - нести ясність людям в будь-яких питаннях,
                  щоб після спілкування зі мною у них з’являлася енергія на нові
                  дії. Моя задача : перетворювати складне і заплутане в легке і
                  зрозуміле.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset" }}
        >
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-10 mt-5 align-items-center flex-column">
              <Card.Text className="info-text">
                <p className="h1">
                  Пролити світло, в якій сфері лежать ваші гроші та допомогти
                  вам побачити нові способи збільшення доходів.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                <p className="h1">
                  Які внутрішні блоки та твердження не дають заробляти достатньо
                  грошей для забезпечення того рівня життя, який ви хочете.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                <p className="h1">
                  Дати вам покрокову стратегію, як правильно розприділяти
                  бюджет, щоб купувати те, що ви хочете і не економити на собі -
                  розроблена Робертом Кійосакі.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                <p className="h1">
                  Дати вам ключ до розуміння, чому ви не можете досягти своїх
                  фінансових цілей, і яка вигода прихована за цим.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                <p className="h1">
                  Поділитися технікою примноження фінансів, звільнення від
                  боргів, яка допомагає вийти за межі фінансової стелі.
                </p>
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Goal;
