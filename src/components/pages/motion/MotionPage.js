import React from "react";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class MotionPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <div style={{ margin: "0 auto", width: "1024px" }}>
            <h1>Motion</h1>

            <h4 className="subheading">
              <i>
                “Animation offers a medium of story telling and visual
                entertainment which can bring pleasure and information.”
              </i>
              - Walter Elias Disney.
            </h4>

            <h4>Speed</h4>
            <div className="og-motion-specimens-container">
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-duration(fast)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-duration1" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-duration(base)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-duration2" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-duration(slow)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-duration3" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-duration(slower)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-duration4" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-duration(slowest)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-duration5" />
              </div>
            </div>

            <h4>Easing</h4>
            <p>
              *With a slow animation of one second to clearly see the
              cubic-bezier
            </p>

            <div className="og-motion-specimens-container">
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(base)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing1" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(in)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing2" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(out)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing3" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(excite)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing4" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(overshoot)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing5" />
              </div>
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-easing(anticipate)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-easing6" />
              </div>
            </div>

            <h4>Delay</h4>
            <div className="og-motion-specimens-container">
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-delay(hurry)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-delay1" />
              </div>
            </div>
            <div className="og-motion-specimens-container">
              <div className="og-motion-specimen-container">
                <div className="og-motion-specimen-code">
                  <p>$og-delay(wait)</p>
                </div>
                <div className="og-motion-specimen og-motion-specimen-delay2" />
              </div>
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            Animating digital objects gets us even closer to the physical world.
            My inspiration for it came from Disney and a book written by Frank
            Thomas and Ollie Jonhston —{" "}
            <i>
              <a
                href="https://youtu.be/jn5OB12u8Pw"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Illusion of Life
              </a>
            </i>
            . In it, they explain the 12 principles of animation which are taken
            from the laws of physics. Although Disney's animations are highly
            exaggerated (on purpose, of course), we can leverage these
            principles to create <i>illusion of life</i> in our digital
            interfaces.
          </p>

          <pre>
            <code className="language-css">
              {`.my-new-cool-ball {
  transition: all og-easing(overshoot) og-duration(slowest);
  height: $og-space-40;
  width: $og-space-40;
  border-radius: og-shape(circle, default);
  background: og-color(background, brand);
  box-shadow: og-elevation(100);

  .container:hover & {
    background: og-color(background, canvas);
    box-shadow: og-elevation(500);
    transform: translateX(500px);
  }
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default MotionPage;
