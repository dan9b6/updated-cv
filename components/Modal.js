import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";

const Modal = () => {
  function toggleModal() {
    document.querySelector(".modal-1").classList.toggle("active");
  }

  useEffect(() => {
    // setModalState(false);
    document.querySelectorAll(".closeModal").forEach((btn) => {
      btn.addEventListener("click", toggleModal, { passive: true });
    });
  }, []);

  return (
    <div className="section--dark modal-1 text-center">
      <Container>
        <div>
          <h2>See... I can code stuff</h2>
          <img
            src="images/modal1.gif"
            alt="I am coding stuff"
            width="700"
            height="400"
          />
          <h3>Are you ready to hire me?</h3>
          <div className="btn-container">
            <Link href="/#footer">
              <a className="btn btn-primary closeModal">HELL YEAH!</a>
            </Link>
            <Link href="/#find-out-more">
              <a className="btn btn-secondary closeModal">
                Lets find out more...
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Modal;
