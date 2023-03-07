import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer
      className="section--dark footer text-center"
      id="footer"
      data-aos="fade-zoom-in"
      data-aos-duration="1000"
    >
      <Container>
        <div className="footer__contact">
          <h2>Get in touch</h2>
          <p>
            If you think I am the perfect fit for you, get in touch and I will
            get back to you as soon as possible.
          </p>
        </div>
        <div className="footer__social">
          <img
            src="images/wave.gif"
            alt="It's me waving"
            id="wave"
            loading="lazy"
            width="200"
            height="170"
          />
          <ul className="footer__social-links">
            <li>
              <a href="mailto:danbh7296@gmail.com" target="_blank">
                <img src="images/svg/mail.svg" alt="Email" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dan-burton-654ba4180/"
                className="nav__social-icon"
                target="_blank"
              >
                <img
                  src="images/svg/linkedin.svg"
                  alt="Linked In"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>

        <small>Copyright © 2020 Dan Burton. All Rights Reserved</small>
      </Container>
    </footer>
  );
};

export default Footer;
