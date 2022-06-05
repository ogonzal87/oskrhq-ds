import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import InputSelect from "../../../InputSelect";
import styled from "styled-components";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

class InputSelectPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Input Select</h1>

          <h4 className="subheading">
            Select inputs allow users to select an option from a list.
          </h4>

          <div className="column-system-2-col">
            <div className="column">
              <InputSelect label="Marital Status" placeholder="Select">
                <option defaultValue="" selected>
                  Choose...
                </option>
                <option value="">Single</option>
                <option value="">Married</option>
                <option value="">It's Complicated</option>
              </InputSelect>
            </div>
            <div className="column">
              <InputSelect label="Input Label" placeholder="Select">
                <option value="">Choose...</option>
                <option value="">This is an Item</option>
                <option defaultValue="And another one" selected>
                  And another one
                </option>
                <option value="">And one more...</option>
              </InputSelect>
            </div>
          </div>

          <h4 className="og-usage-title">Usage</h4>

          <p>
            Input Selects are Presentational React Components that you can
            instantiating by <code>InputSelect</code> opening and closing tags
            and passing an attribute for label <code>(string)</code>. You are
            able to transclude the options.
          </p>

          <pre>
            <code className="language-javascript">
              {`<InputSelect label="Marital Status">
  <option value="" selected>Choose...</option>
  <option value="">This is an Item</option>
  <option value="">And another one</option>
  <option value="">And one more...</option>
</InputSelect>`}
            </code>
          </pre>
        </div>

        <FooterMessage />
      </div>
    );
  }
}

export default InputSelectPage;
