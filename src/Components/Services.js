import React, { Component } from "react";
import { Container, Accordion, Row } from "react-bootstrap";

class Services extends Component {
  render() {
    return (
      <Container fluid className="service" id="price">
        <Row>
          <h2 class="text-center text-uppercase pt-5 pb-5 aboutme">
            Мої Послуги
          </h2>
        </Row>
        <Accordion
          defaultActiveKey="0"
          className="acc_text d-flex flex-column align-items-center justify-content-center"
        >
          <Accordion.Item eventKey="0" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1"> Швидка онлайн-консультація – 399 грн</p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>
              <p className="h1">
                • Відповідь на одне конкретне питання, яке потребує швидкої
                поради.
              </p>
              <p className="h1">
                • Професійний аналіз ситуації з акцентом на вирішення нагальної
                проблеми.
              </p>
              <p className="h1">
                • Короткий практичний інструмент або рекомендація для
                першочергового кроку.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1"> Міні-діагностика Матриці Долі – 499 грн</p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>
              <p className="h1">
                • Основну інформацію про свою Матрицю Долі та базові енергетичні
                характеристики.
              </p>
              <p className="h1">
                • Аналіз сильних сторін і можливих життєвих напрямів.
              </p>
              <p className="h1">
                • Знайомство з потенціалом та ризиками, які можуть впливати на
                важливі сфери життя.
              </p>
              <p className="h1">
                • Рекомендацію щодо подальших кроків для глибшого вивчення свого
                шляху.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1">
                Консультація з кармічного менеджменту – 799 грн
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>
              <p className="h1">
                • Огляд основ кармічного менеджменту та його застосування для
                покращення фінансового стану.
              </p>
              <p className="h1">
                • Розуміння власних кармічних перешкод та як їх обійти.
              </p>
              <p className="h1">
                • Один-два базових інструменти для початку роботи над зміною
                фінансової енергії.
              </p>
              <p className="h1">
                • Інструкцію для самостійної практики, щоб поступово покращувати
                фінансове благополуччя.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1">
                Консультація з аналізом певної життєвої сфери – 999 грн
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>

              <p className="h1">Що ви отримаєте:</p>
              <p className="h1">
                • Годинна консультація з фокусом на одній життєвій сфері:
                фінанси, відносини, кар’єра або інша важлива тема.
              </p>
              <p className="h1">
                • Глибокий аналіз енергетичних блоків та сильних сторін у цій
                сфері.
              </p>
              <p className="h1">
                • Поради щодо використання сильних сторін для досягнення цілей.
              </p>
              <p className="h1">
                • Один-два рекомендаційних інструменти для вирішення конкретних
                питань або розвитку в цій сфері.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1">Поглиблений аналіз Матриці Долі – 1299 грн</p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>

              <p className="h1">
                • Детальний аналіз Матриці Долі з акцентом на унікальні
                енергетичні характеристики.
              </p>
              <p className="h1">
                • Глибоке розуміння власного потенціалу, кармічних уроків та
                життєвих напрямків.
              </p>
              <p className="h1">
                • Індивідуальні поради щодо розвитку в особистих і професійних
                сферах.
              </p>
              <p className="h1">
                • Рекомендації для подальшої роботи над собою та створення
                гармонії в житті.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1">
                Персональна програма кармічного менеджменту – 1999 грн
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>
              <p className="h1">
                • Індивідуально розроблену програму для трансформації фінансової
                енергії та інших життєвих аспектів.
              </p>
              <p className="h1">
                • Інструменти кармічного менеджменту для покращення фінансового
                стану, відносин або духовного зростання.
              </p>
              <p className="h1">
                • Підтримку в формі періодичного супроводу та відповідей на
                запитання під час проходження програми.
              </p>
              <p className="h1">
                • План щоденних дій та практик, які можна виконувати самостійно
                для підтримки позитивних змін.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="col-8 shadow-lg mb-5">
            <Accordion.Header>
              <p className="h1">
                Комплексна консультація + 2 супровідні сесії – 2500 грн
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="h1">Що отримає клієнт:</p>
              <p className="h1">
                • Повний комплексний аналіз життєвих сфер із виявленням поточних
                блоків і сильних сторін.
              </p>
              <p className="h1">
                • Розробку персонального плану для досягнення бажаних змін у
                вибраній сфері.
              </p>
              <p className="h1">
                • Дві додаткові сесії для глибшого аналізу прогресу, адаптації
                програми та подальших рекомендацій
              </p>
              <p className="h1">
                • Інструкції для роботи з кармічними інструментами, що
                допоможуть подолати обмеження й досягти гармонії.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}

export default Services;
