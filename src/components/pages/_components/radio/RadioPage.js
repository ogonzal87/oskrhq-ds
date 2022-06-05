import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import Radio from "../../../Radio";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

class RadioPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Radio</h1>

          <h4 className="subheading">
            Binary radios allow the selection of a single option from a set.
          </h4>

          <div className="column-system-2-col" role="radiogroup">
            <div className="column">
              <Radio name="true" label="Checked radio" isChecked />
            </div>
            <div className="column">
              <Radio name="true" label="Unchecked radio" />
            </div>
          </div>

          <h4 className="ds-usage-title">Usage</h4>

          <p>
            Radios are tools the user has to communicate something to the app.
            In this system they are a Presentational React Components that you
            can use by simply instantiating a <code>Radio</code> tag and passing
            attributes for name <code>(string)</code>, onChange{" "}
            <code>(function)</code>, isChecked <code>(boolean)</code>, label
            <code>(string)</code>, id <code>(string)</code>, value and{" "}
            <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">
              {`class DemoPage extends React.Component {
  handleChange(event) {
    // do something
  }
  render() {
    return (
      <legend>Pizza Crust</legend>
          <div role="radiogroup">
            <Radio
              label="Thin Crust"
              name="pizza"
              isChecked
            />
            <Radio
              label="Deep dish"
              name="pizza"
            />
          </div>
    )
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

export default RadioPage;
