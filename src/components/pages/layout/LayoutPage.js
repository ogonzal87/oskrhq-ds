import React from "react";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class LayoutPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container layout-page-container">
          <h1>Layout</h1>

          <h4 className="subheading">
            Responsiveness is based on a column-variate grid layout.
          </h4>

          <p>
            For containers or elements that need to be fluid, as in they need to
            expand a certain percentage of a parent container, the system uses a
            12-column and 24px Gutter system along the x-axis with scss utility
            classes for its use.
          </p>
          <h4>Column System</h4>
          <div className="column-system-12-col">
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
          </div>
          <br />
          <div className="column-system-8-col">
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
          </div>
          <br />
          <div className="column-system-6-col">
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
          </div>
          <br />
          <div className="column-system-4">
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column" />
          </div>
          <br />
          <div className="column-system-2-col">
            <div className="column" />
            <div className="column" />
          </div>

          <h4>Usage</h4>

          <p>
            Wrap the column elements with a div and assign it this css class:{" "}
            <code>.column-system-[number of columns you need]-col</code>.
          </p>

          <pre>
            <code className="language-html">
              {`<div className="column-system-8-col">
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
</div>`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default LayoutPage;
