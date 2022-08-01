import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="section--dark footer" id="footer">
      <Container>
        <Row>
          <Col xs="12" lg="8">
            <div className="footer__contact">
              <h2>Get in touch</h2>
              <p>
                If you think I am the perfect fit for you, leave me a message
                below and I will get back to you as soon as I can.
              </p>
              <Form className="footer__form">
                <Row>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="name" placeholder="Enter name..." />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="name" placeholder="Enter email..." />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="number">
                      <Form.Label>Number:</Form.Label>
                      <Form.Control type="name" placeholder="Enter number..." />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="company">
                      <Form.Label>Company:</Form.Label>
                      <Form.Control
                        type="company"
                        placeholder="Enter company name..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="text-center text-lg-start mb-4">
                  <button className="btn btn-secondary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
          <h3 className="mb-3 footer__split">
            <span>Or</span>
          </h3>
          <Col xs="12" lg="4">
            <div className="footer__social">
              <h2>Just Say Hi!</h2>
              <img src="images/wave.gif" alt="It's me waving" id="wave" />
              <p>Get in touch using a different way</p>
              <ul className="footer__social-links">
                <li>
                  <a href="mailto:danbh7296@gmail.com" target="_blank">
                    <img src="images/svg/mail.svg" alt="Phone" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dan-burton-654ba4180/"
                    className="nav__social-icon"
                  >
                    <img src="images/svg/linkedin.svg" alt="Phone" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <small>Copyright © 2020 Dan Burton. All Rights Reserved</small>
      </Container>
    </footer>
  );
};

export default Footer;
