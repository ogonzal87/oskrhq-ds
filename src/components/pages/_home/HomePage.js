import React from "react";
import logoBrush from "../../../assets/logo/ds-logo.png";
import Splash from "../../../assets/brush/splash.png";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import BrushSegment from "../../../assets/brush/brush-divider.png";
// import smallBrushImg from "../../../assets/brush/small-brush.png";
import styled from "styled-components";

// const PrinciplesSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: flex-start;
// `;

// const PrincipleContainer = styled.div`
//   margin: 40px 0 24px 0;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="intro-first-section-container">
          <img
            src={logoBrush}
            className="intro-logo-brush"
            alt="design system logo"
          />

          <svg>
            <filter id="transmissionerror">
              <feColorMatrix
                type="hueRotate"
                values="0"
                in="SourceGraphic"
                result="colormatrix1"
              />
              <feColorMatrix
                type="hueRotate"
                values="0.95 0 0 0 0  0 0 0 0 0  0 0 0.4 0 0  0 0 0 1 0"
                in="colormatrix1"
                result="colormatrix2"
              />
              <feTurbulence
                type="turbulence"
                baseFrequency="0.002 0.008"
                numOctaves="2"
                seed="5"
                stitchTiles="noStitch"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  from="0.002 0.008"
                  to="0.002 0.01"
                  dur="3500ms"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="numOctaves"
                  from="1"
                  to="10"
                  dur="75000ms"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="seed"
                  from="1"
                  to="100"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feColorMatrix
                type="hueRotate"
                values="30"
                in="turbulence"
                result="colormatrix3"
              />
              <feColorMatrix
                type=""
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -15"
                in="colormatrix3"
                result="colormatrix4"
              />
              <feDisplacementMap
                in="colormatrix2"
                in2="colomatrix4"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="A"
                result="displacementMap"
              />
            </filter>
          </svg>

          <h4 className="subheading">
            A mostly opinionated but reasonable approach to building responsive
            digital interfaces sharing a common anatomy.
          </h4>

          <img src={Splash} className="intro-splash" alt="." />

          <div className="circle-arrow-view-more">
            <i className="material-icons icon-small">expand_more</i>
          </div>
        </div>

        <div className="intro-second-section-container">
          <p className="og-text-style-overline ">What is this?</p>

          <div className="home-page-columns">
            <div>
              <p>
                OSKRHQ.DS is a <i>themeable</i> Style Guide and Component
                Library built in React for responsive web interfaces. I created
                the system for my personal brand, but anyone can use theme it
                and use it as their own. Its architecture was inspired by my
                learnings while building and maintaining large enterprise
                multi-platform Design Systems.
              </p>

              <p>
                Every UI element you see here was composed of the same nine
                foundational elements using semantic{" "}
                <a
                  href="https://uxdesign.cc/design-tokens-cheatsheet-927fc1404099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Tokens
                </a>
                . Something I like to call{" "}
                <i>
                  <a
                    href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Anatomy of UI
                  </a>
                </i>
                : Color, Typography, Space, Motion, Depth, Iconography, Borders,
                Layout, and Shape. The System contains practical engineering
                tools for composing custom elements all made from the same
                foundational anatomy.
              </p>
            </div>

            <div>
              <p className="og-text-style-headi ng6">
                <span>Design System (noun)</span>: A{" "}
                <span className="og-accent-text">product</span> made of living
                guidelines that communicates a{" "}
                <span className="og-accent-text">unified</span> set of UX and
                design decisions which promotes{" "}
                <span className="og-accent-text">harmony</span> across various
                media outputs.
              </p>
            </div>
          </div>
        </div>

        <div className="intro-second-section-container">
          {/* <p className="og-text-style-overline intro-subtitle">
            Design Principles
          </p> */}

          {/* <PrinciplesSection>
            <PrincipleContainer>
              <img
                alt=""
                src={smallBrushImg}
                style={{
                  width: "120px",
                  height: "64px",
                  margin: "16px 0 8px -24px",
                  transform: "rotate(-20deg)",
                }}
              />
              <span className="og-text-style-heading4 intro-principle-number">
                01.
              </span>
              <p className="intro-principle-title">MEANINGFUL SIMPLICITY</p>

              <p style={{ width: "260px" }}>
                Simple and beautiful design is great but can I articulate the
                value of its existence?
              </p>
            </PrincipleContainer>

            <PrincipleContainer>
              <img
                alt=""
                src={smallBrushImg}
                style={{
                  width: "120px",
                  height: "64px",
                  margin: "16px 0 8px -24px",
                  transform: "rotate(-20deg)",
                }}
              />
              <span className="og-text-style-heading4 intro-principle-number">
                02.
              </span>
              <p className="intro-principle-title">BORROW FROM NATURE</p>

              <p style={{ width: "260px" }}>
                Nature is already perfect. Use natural forces to influence the
                user's senses through code and design.
              </p>
            </PrincipleContainer>

            <PrincipleContainer>
              <img
                alt=""
                src={smallBrushImg}
                style={{
                  width: "120px",
                  height: "64px",
                  margin: "16px 0 8px -24px",
                  transform: "rotate(-20deg)",
                }}
              />
              <span className="og-text-style-heading4 intro-principle-number">
                03.
              </span>
              <p className="intro-principle-title">BE THE BRAND</p>

              <p style={{ width: "260px" }}>
                The success of my message is rooted in the <i>consistency</i> of
                my Personal Branding.
              </p>
            </PrincipleContainer>
          </PrinciplesSection> */}

          <img src={BrushSegment} className="intro-brush-segment-img" alt="" />
        </div>

        <div className="intro-second-section-container">
          <p className="og-text-style-overline">Why is this even a thing?</p>

          <div className="home-page-columns">
            <div>
              <p>
                Every interface you interact with was designed at some point.
                And those interfaces were probably crafted by design teams
                divided into smaller teams. These silos create fragmented
                experiences looking at the Customer Experience (CX)
                holistically.
              </p>
              <p>
                From a designer's perspective, a Design System allows you to
                focus on solving problems for users and less on solving minor
                design problems already addressed by the Design System.
              </p>
              <p>
                From an engineer's perspective, a Design System allows you to
                build interfaces with reusable pieces of code and enables you to
                build without absolute values. Those are most likely a byproduct
                of a custom design decision meant to solve a design problem
                already solved. In most cases, you want to avoid this.
              </p>
            </div>

            <div></div>
          </div>
        </div>

        {/* <div className="intro-second-section-container">
      <p className="og-text-style-overline">How Do I use it?</p>

      <div className="home-page-columns">
        <div>
          <p>
            If you are a Designer... I got you. I created a{" "}
            <a href="https://github.com/ogonzal87/oskrhq-uikit" target="blank">
              UI Kit
            </a>{" "}
            that mirrors the components you see on this website. That way, you
            can create experiences with the same building blocks (components)
            the Developers have. It also has all the design assets you will need
            to get started.
          </p>
        </div>

        <div>
          <p>
            If you are a Developer, check the{" "}
            <a
              href="https://github.com/ogonzal87/oskrhq-design-system"
              target="blank"
            >
              Github repo
            </a>{" "}
            for guidance. And if you feel like contributing, it would make my
            day 😎
          </p>
        </div>
      </div>
    </div> */}

        {/* <div className="intro-second-section-container">
      <p className="og-text-style-overline">Can I theme it?</p>

      <div>
        <div>
          <p>
            Yep. OSKRHQ.DS supports theming out of the box. You can fork the
            code repo in Github, change a couple of values in one place and be
            able to have a Design System with your unique personality and brand
            identity. Below you can see theming in action shifting from one
            theme to another. For more info, checkout the{" "}
            <a
              href="https://github.com/ogonzal87/oskrhq-design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
            .
          </p>
        </div>
      </div>
    </div> */}

        <FooterMessage />
      </div>
    );
  }
}

export default HomePage;
