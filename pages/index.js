import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Head from "next/head";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function toggleNav() {
    setToggle(!toggle);
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
  }

  function toggleModal() {
    document.querySelector(".modal-1").classList.toggle("active");
  }

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    setScrollY(window.pageYOffset);
    if (scrollY > 150) {
      document.querySelector(".header").classList.add("slide");
    } else {
      document.querySelector(".header").classList.remove("slide");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    document
      .querySelector("#openModal")
      .addEventListener("click", toggleModal, { passive: true });
  }, []);

  return (
    <>
      <Head>
        <title>danburts</title>
        <meta name="title" content="danburts" />
        <meta
          name="description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danburts.co.uk/" />
        <meta property="og:title" content="danburts" />
        <meta
          property="og:description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />
        <meta
          property="og:image"
          content="https://www.danburts.co.uk/images/wave.gif"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.danburts.co.uk/" />
        <meta property="twitter:title" content="Jo Darley & Co" />
        <meta
          property="twitter:description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />
        <meta
          property="twitter:image"
          content="https://www.danburts.co.uk/images/wave.gif"
        />
      </Head>
      <Header />
      <Navbar />
      <section className="section section--landing section--dark text-center">
        <Container>
          <div
            className="section--landing__heading"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
          >
            <h1>Hello. I’m Dan. I’m a Web Developer looking for a new role!</h1>
          </div>
        </Container>

        <a className="scroll-prompt" href="#what-can-i-offer">
          <div className="scroll-prompt__text">Scroll down to see more</div>
          <img
            src="images/svg/mouse.svg"
            alt="Mouse"
            className="scroll-prompt__icon"
            id="what-can-i-offer"
          />
        </a>
      </section>
      <section
        className="section text-center"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        <Container>
          <h2>Are you looking for a new Web Developer?</h2>
          <p className="">If so, check out my credentials...</p>
          <p className="">
            <i>How long have you got?</i>
          </p>
          <div className="btn-container">
            <button className="btn btn-secondary" id="openModal">
              I've got no time...
            </button>
            <Link href="/about">
              <a className="btn btn-secondary" id="find-out-more">
                I've got time!
              </a>
            </Link>
          </div>
        </Container>
      </section>
      <section
        className="section section--dark text-center"
        id="projects"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        <Container>
          <h2>Check out the projects I've worked on</h2>
          <Row>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--lfs"
                data-project-id="lfs"
                href="https://www.lifesearch.com/"
                target="_blank"
              >
                <img
                  src="images/projects/project/lfs-logo.svg"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--hoya"
                data-project-id="hoya"
                href="https://www.hoyavision.com/uk/"
                target="_blank"
              >
                <img
                  src="images/projects/project/hoya-logo.svg"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--afi"
                data-project-id="afi"
                href="https://www.animalfriends.co.uk/"
                target="_blank"
              >
                <img
                  src="images/projects/project/afi-logo.svg"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--jd"
                data-project-id="jd"
                href="https://jodarleyandco.com/"
                target="_blank"
              >
                <img src="images/projects/project/jd-logo.svg" loading="lazy" />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--swi"
                data-project-id="swi"
                href="https://www.swinton.co.uk/"
                target="_blank"
              >
                <img
                  src="images/projects/project/swi-logo.png"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--atg"
                data-project-id="atg"
                href="https://www.atlantagroup.co.uk/"
                target="_blank"
              >
                <img
                  src="images/projects/project/atg-logo.png"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--cn"
                data-project-id="cn"
                href="https://www.carolenash.com/"
                target="_blank"
              >
                <img
                  src="images/projects/project/carolenash-logo.svg"
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                className="project__pane project__pane--ms"
                data-project-id="ms"
                href="https://www.marisolcorona.com/"
                target="_blank"
              >
                <img
                  src="images/projects/project/marisol-logo.png"
                  loading="lazy"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="section text-center offer"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        <Container>
          <h2>What can I offer?</h2>
          <p className="lead">
            Here are three of my biggest qualities I can bring to your role
          </p>
          <Row>
            <Col xs="12" lg="4">
              <div className="offer__block">
                <img src="images/sign.gif" loading="lazy" />
                <h3>Communication</h3>
                <p>
                  I really enjoy working amongst a team of motivated people. I
                  consider myself to be a team player and always have time for
                  my fellow professional - whether that is tackling a problem
                  together or learning from them.
                </p>
              </div>
            </Col>
            <Col xs="12" lg="4">
              <div className="offer__block">
                <img src="images/enthusiasm.gif" loading="lazy" />
                <h3>Enthusiasm</h3>
                <p>
                  I am always willing to take on new challenges and give it my
                  all. This is something I am incredibly passionate about. The
                  learning curve in this industry is never ending, which is why
                  this sector excites me.
                </p>
              </div>
            </Col>
            <Col xs="12" lg="4">
              <div className="offer__block">
                <img src="images/bulb.gif" loading="lazy" />
                <h3>Problem Solver</h3>
                <p>
                  Nothing is more rewarding then solving a problem. There are
                  many challenges day to day as a developer
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="section section--dark text-center section--freelance"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        <div className="section--freelance__overlay"></div>
        <Container>
          <div className="section--freelance__text">
            <h2>Yes... I am open to freelance opportunities!</h2>
            <p>Check out my last fullstack freelance project I have created.</p>
            <a
              className="btn btn-secondary"
              href="https://jodarleyandco.com/"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </Container>
      </section>
      <Footer />
      <Modal />
    </>
  );
}
