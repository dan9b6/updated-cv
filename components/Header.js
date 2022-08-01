import React from "react";
import Container from "react-bootstrap/Container";
import { useEffect, useState, useCallback } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  function toggleNav() {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
    document.querySelector(".header__menu").classList.toggle("active");
  }

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    console.log("scrollY", scrollY);
    setScrollY(window.pageYOffset);
    if (scrollY > 150) {
      document.querySelector(".header").classList.add("slide");
    } else {
      document.querySelector(".header").classList.remove("slide");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <header className="header">
      <Container fluid>
        <div className="d-flex justify-content-between">
          <a className="header__logo" href="/">
            <img src="images/wave.gif" alt="It's me waving" />
            <span>danburts.co.uk</span>
          </a>
          <div className="header__menu" onClick={toggleNav}>
            <div className="header__menu-status">
              <span>Menu</span>
              <span>Close</span>
            </div>
            <div className="header__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
