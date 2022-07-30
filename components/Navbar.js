import Link from "next/link";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  return (
    <nav className="nav">
      <Container>
        <ul className="nav__links">
          <li>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Employment</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <ul className="nav__links-social">
          <li>
            <a href="">
              <img src="images/svg/mail.svg" alt="Phone" />
            </a>
          </li>
          <li>
            <a href="" className="nav__social-icon">
              <img src="images/svg/phone.svg" alt="Phone" />
            </a>
          </li>
          <li>
            <a href="" className="nav__social-icon">
              <img src="images/svg/linkedin.svg" alt="Phone" />
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
