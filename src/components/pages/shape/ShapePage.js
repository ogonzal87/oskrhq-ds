import React from "react";
import Card from "../../Card";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class ShapePage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <div className="shape-page">
            <h1>Shape</h1>

            <h4 className="subheading">
              Surfaces can be displayed in different shapes. Shapes direct
              attention, identify components, communicate state, and express
              brand.
            </h4>

            <div className="shape-page-grid">
              <div className="specimen-container">
                <Card height="200px" styles="shape-primary shape-specimen" />
                <p>$primary</p>
              </div>

              <div className="specimen-container">
                <Card height="200px" styles="shape-secondary shape-specimen" />
                <p>$secondary</p>
              </div>

              <div className="specimen-container">
                <Card height="200px" styles="shape-tertiary shape-specimen" />
                <p>$tertiary</p>
              </div>

              <div className="specimen-container">
                <Card height="200px" styles="shape-quaternary shape-specimen" />
                <p>$quaternary</p>
              </div>

              <div className="specimen-container">
                <Card height="200px" styles="shape-squared shape-specimen" />
                <p>$squared</p>
              </div>

              <div className="specimen-container">
                <Card height="200px" styles="shape-circle shape-specimen" />
                <p>$circle</p>
              </div>
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            Most contained UI elements use of a sass function;{" "}
            <code>og-shape($type, $vw-size),</code> where <code>$type</code> is
            how round an object is and the <code>$vw-size</code> is how round
            the shape is based on the viewport width.
          </p>

          <pre>
            <code className="language-css">
              {`.my-new-cool-ball {
  border-radius: og-shape(circle, default);
  background: og-color(background, brand);
  height: $og-space-40;
  width: $og-space-40;
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default ShapePage;
