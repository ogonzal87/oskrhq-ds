import React from "react";
import PresentationPic from "../../../assets/profile-pic/duotone.png";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import styled from "styled-components";

const PContactPage = styled.p`
  font-size: 24px;
  line-height: normal;
  margin-bottom: 0;
`;

const Contact = () => (
  <div className="main-content">
    <div className="container">
      <h1>Let's Talk...</h1>

      <PContactPage className="og-contact-subheading">
        I created and maintain this System as a personal project but if you
        would like to consume it,{" "}
        <a
          href="https://github.com/ogonzal87/oskrhq-ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          just take a look at the code
        </a>
        .
      </PContactPage>

      <PContactPage
        className="og-contact-subheading"
        style={{ marginBottom: "80px" }}
      >
        For more info about this Design System and others I have created, hit me
        up at{" "}
        <a href="mailto:osk.gonzo@gmail.com?Subject=Hola!" target="_blank">
          osk.gonzo@gmail.com
        </a>
        . I love to geek out about this stuff.
      </PContactPage>

      <div className="og-contact-presentation-pic-container">
        <img
          src={PresentationPic}
          className="og-contact-presentation-pic"
          alt="me at a presentation I gave about Design Systems"
        />
      </div>
    </div>

    <FooterMessage />
  </div>
);

export default Contact;
