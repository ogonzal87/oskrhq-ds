import React from "react";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class ElevationPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Elevation</h1>

          <h4 className="subheading">
            Elevation is the relative distance between two surfaces along the
            z-axis.
          </h4>

          <div className="elevation-page-grid">
            <div className="specimen-container">
              <div className="elevation-specimen elevation-000" />
              <p>$000</p>
            </div>

            <div className="specimen-container">
              <div className="elevation-specimen elevation-100" />
              <p>$100</p>
            </div>

            <div className="specimen-container">
              <div className="elevation-specimen elevation-200" />
              <p>$200</p>
            </div>

            <div className="specimen-container">
              <div className="elevation-specimen elevation-300" />
              <p>$300</p>
            </div>

            <div className="specimen-container">
              <div className="elevation-specimen elevation-400" />
              <p>$400</p>
            </div>

            <div className="specimen-container">
              <div className="elevation-specimen elevation-500" />
              <p>$500</p>
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            By using the sass function <code>og-elevation($range)</code>, where{" "}
            <code>$range</code> is a value from 000 through 500, you can create
            levels of visual hierarchy. The higher the number, the more elevated
            an item will appear. Use this when you are trying to emphasize
            sections of UI like containers or buttons.
          </p>

          <pre>
            <code className="language-css">
              {`.my-new-cool-container-coming-at-you {
  box-shadow: og-elevation(500);
  background: og-color(background, brand);
  width:      $og-space-40;
  height:     $og-space-40;;
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default ElevationPage;
