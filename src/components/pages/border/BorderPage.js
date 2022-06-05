import React from "react";
import BorderSpecimen from "./border-specimen";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class BorderPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Borders</h1>

          <h4 className="subheading">
            Visual elements that break apart or contain space, i.e., rules
            between objects or outlines on objects.
          </h4>

          <h4>Thin</h4>
          <div className="border-page-grid">
            <BorderSpecimen name="border-thin" />
            <div className="border-specimen-on-dark">
              <BorderSpecimen name="border-thin-on-dark" />
            </div>
          </div>

          <h4>Thick</h4>
          <div className="border-page-grid">
            <BorderSpecimen name="border-thick" />
            <div className="border-specimen-on-dark">
              <BorderSpecimen name="border-thick-on-dark" />
            </div>
          </div>

          <h4>Thicker</h4>
          <div className="border-page-grid">
            <BorderSpecimen name="border-thicker" />
            <div className="border-specimen-on-dark">
              <BorderSpecimen name="border-thicker-on-dark" />
            </div>
          </div>

          <h4>Thickest</h4>
          <div className="border-page-grid">
            <BorderSpecimen name="border-thickest" />
            <div className="border-specimen-on-dark">
              <BorderSpecimen name="border-thickest-on-dark" />
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            Most contained UI elements make use of a sass function;
            <code> og-border($size)</code> where <code>$size</code> is the
            border thickness.
          </p>

          <pre>
            <code className="language-css">
              {`.my-new-cool-container-coming-at-you {
  border: og-border(thin) og-color(border, primary) solid;
  width:  $og-space-40;
  height: $og-space-40;;
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default BorderPage;
