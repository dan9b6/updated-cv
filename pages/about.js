import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Head from "next/head";

const aboutMe = () => {
  return (
    <>
      <Head>
        <title>danburts</title>
        <meta name="title" content="danburts - About" />
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
        <meta property="twitter:title" content="danburts - CV website" />
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
      <div className="about">
        <section className="section--landing text-center section--dark">
          <Container>
            <h1 data-aos="fade-zoom-in" data-aos-duration="1000">
              About Me
            </h1>
          </Container>
        </section>
        <section
          className="section text-center"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <Container>
            <Row>
              <Col xs="12" lg="6">
                <div className="about__summary-block about__summary-block--skills">
                  <h2>Skills</h2>
                  <Row>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/html5.svg" alt="html logo" />
                      <span>HTML</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/css3.svg" alt="CSS3 logo" />
                      <span>CSS</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/sass.svg" alt="SASS logo" />
                      <span>SASS/SCSS</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/react.svg" alt="react logo" />
                      <span>React.js</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/next-js.svg" alt="Next js logo" />
                      <span>Next.js</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/js.svg" alt="javascript logo" />
                      <span>Javascript</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/github.svg" alt="github logo" />
                      <span>Github</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img
                        src="images/skills/bootstrap.svg"
                        alt="bootstrap logo"
                      />
                      <span>Bootstrap</span>
                    </Col>
                    <Col xs="4" className="mb-3">
                      <img src="images/skills/asp.svg" alt="ASP logo" />
                      <span>MVC Razor</span>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs="12" lg="6">
                <div className="about__summary-block about__summary-block--education">
                  <h2>Education</h2>
                  <img src="images/skills/ironhack-1.svg" alt="Ironhack Logo" />
                  <h3>Ironhack (Lisbon)</h3>
                  <h4>Top 3 Global Tech Academy</h4>
                  <p>
                    I didn't take the most conventional route into Software
                    Engineering. I completed a Web Development Bootcamp set in
                    the heart of Lisbon, Portugal. During my time on the course
                    I covered a wide range of skills and coding languages. By
                    the end of the course, I had created three web applications.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="section section--dark text-center"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <Container>
            <h2>Current Role</h2>
            <div className="about__employment-block">
              <h3>Frontend Developer</h3>
              <img src="images/skills/appius-logo.svg" alt="Appius Logo" />
              <h5>Roles and Responsibilites</h5>
              <ul className="text-start">
                <li>
                  Create fully responsive website and web applications for new
                  and existing clients.
                </li>
                <li>
                  Writing and updating technical specifications to use as a
                  reference throughout projects.
                </li>
                <li>
                  Use of technologies such as:
                  <ul>
                    <li>Vue.js</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                    <li>HTML</li>
                    <li>ASP MVC (Razor)</li>
                    <li>SASS</li>
                    <li>CSS</li>
                  </ul>
                </li>
                <li>
                  Work with a number of different Content Management Systems,
                  such as:
                  <ul>
                    <li>Sitefinity</li>
                    <li>Umbraco</li>
                    <li>Episerver (Optimizely)</li>
                    <li>Sitecore</li>
                  </ul>
                </li>
                <li>
                  Involvement in planning software releases and contribution to
                  the planning.
                </li>
                <li>
                  Follow a structured branching strategy using Github and Azure
                  to allow multiple releases to various environments.
                </li>
              </ul>
            </div>
          </Container>
        </section>
        <section
          className="section text-center section--timeline"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <Container>
            <h2>My Timeline</h2>
            <div className="timeline">
              <div className="timeline__block">
                <img
                  src="images/timeline/1.jpg"
                  alt="baby dan"
                  loading="lazy"
                />
                <h3>1996</h3>
                <p>
                  The year I was born. The year Take That separated and the year
                  'Dolly' the sheep was born. What a time to be alive!
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/2.jpg"
                  alt="school boy dan"
                  loading="lazy"
                />
                <h3>2000</h3>
                <p>
                  My first day at school was at Lilliput Primary School. Who
                  could of known I would end up here coding and programming my
                  way into the world of tech.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/3.jpg"
                  alt="highbury stadium"
                  loading="lazy"
                />
                <h3>2002</h3>
                <p>
                  I went to my first ever football match - Arsenal vs
                  Southampton. Since my trip to this beautiful stadium, being an
                  Arsenal fan has definitely become more and more painful over
                  the years. I hope that being a fan of this club won't be a
                  dealbreaker!
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/4.jpg"
                  alt="paper boy"
                  loading="lazy"
                />
                <h3>2010</h3>
                <p>
                  My first job was landed. I became a paperboy! Monday to
                  Saturday at 6:30am I would make my way down to my local
                  newsagents to collect my round and get underway. Wasn't the
                  dream role - but that £25 a week went a long way back then.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/5.png"
                  alt="yeovil football club"
                  loading="lazy"
                />
                <h3>2011</h3>
                <p>
                  I was (and still am) obsessed with football. Fortunately, I
                  had the opportunity to play for Yeovil FC Academy. During this
                  time I played against a number of academy teams at the highest
                  level. However, I didn't quite make the cut.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/6.jpg"
                  alt="Watching the GB Olympics"
                />
                <h3>2012</h3>
                <p>
                  I had finished my GCSE's! I managed to get 11 GCSE's all A-C -
                  including an A in Maths, Biology and P.E. So to celebrate my
                  exams, me and a few friends went to Cardiff for the Olympic
                  Games to watch GB take on South Korea. Unfortunately they lost
                  5-4 on penalties.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/7.png"
                  alt="The Training Room"
                  loading="lazy"
                />
                <h3>2015</h3>
                <p>
                  I began my first job in Educational Sales at The Training
                  Room. This was my first exposure to the world of tech.
                  Originallly I began selling Personal Training courses.
                  However, I then moved into selling Software & Web Development
                  training courses. Whilst working at The Training Room I worked
                  with a team of Sales Executives trying to help people change
                  their career's and enter into the world of IT. It was during
                  this time that I started to look into these areas myself and
                  my interest in the sector began to increase.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/8.png"
                  alt="Thailand trip"
                  loading="lazy"
                />
                <h3>2019</h3>
                <p>
                  At the start of 2019, I decided to go travelling in Thailand.
                  It was a truly incredible experience and during my time I
                  visited many islands, met people from around the world, many
                  adventure days and of course - went to many bars. However,
                  during my time in Asia, it gave me a real chance to reflect on
                  what I wanted to do when I got back home - which is when I
                  started looking into roles in tech.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/9.png"
                  alt="code academy logo"
                  loading="lazy"
                />
                <h3>2019</h3>
                <p>
                  I started learning how to code. I became a regular at
                  CodeAcademy and Stack OverFlow. First of all, I started to
                  learn HTML and CSS. I found it incredibly rewarding building
                  something from nothing and having it appear in front of me. I
                  was creating a number of static web pages and trialling
                  different effects and animations that I could use for future
                  websites. I then moved onto basic Javascript. This is when I
                  knew I wanted become a Web Developer and get some professional
                  training and qualifications.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/10.png"
                  alt="Ironhack logo"
                  loading="lazy"
                />
                <h3>2020</h3>
                <p>
                  I graduated as a Web Developer through Ironhack Tech Bootcamp
                  - Lisbon. During the course I covered a number of technologies
                  and languages. Such as: HTML CSS/SASS Javascript React JS Node
                  Express Mongo DB and many other skills which you can find on
                  this link. This whole experience was a real eye-opener for me.
                  I never thought it would be possible to learn as much as I did
                  during this bootcamp and leave with three fully functional
                  projects.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/timeline/11.png"
                  alt="Bendando logo"
                  loading="lazy"
                />
                <h3>2021</h3>
                <p>
                  I began an apprenticeship with BenDando. Currently, most of
                  the work I am doing involves using React and Next JS. I am
                  heavily involved in the front-end development to - where I am
                  using HTML, CSS/SASS, JS and other Web Design tools such as
                  MDB Bootstrap. I have also had a little exposure to Shopify
                  and Sanity - which is a headless CMS software.
                </p>
              </div>
              <div className="timeline__block">
                <img
                  src="images/skills/appius-logo.svg"
                  alt="Appius"
                  loading="lazy"
                />
                <h3>2022</h3>
                <p>
                  I started my first web agency role at Appius. During my time
                  at Appius, I have been exposed to a number of projects. Over
                  the last year, my focus with Appius has been HTML, SCSS and
                  Javascript - with a few opportunities to work with Vue.js.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default aboutMe;
