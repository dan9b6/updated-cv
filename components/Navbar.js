import Link from "next/link";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  function toggleNav() {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
    document.querySelector(".header__menu").classList.toggle("active");
  }

  useEffect(() => {
    let navLinks = document.querySelectorAll(".nav__links a");

    navLinks.forEach((link) => {
      link.addEventListener("click", toggleNav, { passive: true });
    });
  }, []);

  return (
    <nav className="nav">
      <Container>
        <ul className="nav__links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#footer">
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
