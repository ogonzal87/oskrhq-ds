import React from "react";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class IconographyPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Iconography</h1>

          <h4 className="subheading">
            Iconography is a visual language within the system that uses images
            and symbols to represent objects or meaning.
          </h4>

          <div className="elevation-page-grid">
            <div className="specimen-container">
              <i className="material-icons icon-size-xsmall">face</i>
              <p>$xsmall</p>
            </div>

            <div className="specimen-container">
              <i className="material-icons icon-size-small">face</i>
              <p>$small</p>
            </div>

            <div className="specimen-container">
              <i className="material-icons icon-size-medium">face</i>
              <p>$medium</p>
            </div>

            <div className="specimen-container">
              <i className="material-icons icon-size-large">face</i>
              <p>$large</p>
            </div>

            <div className="specimen-container">
              <i className="material-icons icon-size-xlarge">face</i>
              <p>$xlarge</p>
            </div>

            <div className="specimen-container">
              <i className="material-icons icon-size-xxlarge">face</i>
              <p>$xxlarge</p>
            </div>
          </div>

          <h4>Usage</h4>

          <div className="column-system-2-col">
            <p>
              The system uses the Material Design Icon Font, although I am
              creating my own set using svg's. To use Material Icons, you can
              just include a <code>i</code> tag in your markup and add one of
              the utility classes above for sizing.
            </p>

            <p>
              ☝🏽
              <strong>
                For the full set of icons and names, check out{" "}
                <a
                  href="https://material.io/icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Material Design's Icons website
                </a>
                .
              </strong>
            </p>
          </div>

          <pre>
            <code className="language-html">
              {`<i class="material-icons ds-icon-xlarge">face</i>`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default IconographyPage;
