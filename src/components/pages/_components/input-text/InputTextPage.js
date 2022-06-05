import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import InputText from "../../../InputText";

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
          <h1>Input Text</h1>

          <h4 className="subheading">
            Text inputs allow users to input text and usually appear in forms.
            Use when the application requires content from the user.
          </h4>

          <div className="column-system-2-col">
            <div className="column">
              <InputText label="Full Name" placeholder="placeholder..." />
            </div>
            <div className="column">
              <InputText label="Full Name" value="John Doe" />
            </div>
          </div>

          <h4 className="og-usage-title">Usage</h4>

          <p>
            Input Fields are tools the user has to communicate something to the
            app. In the system they are a Presentational React Components that
            you can use by simply instantiating a <code>InputText</code> tag and
            passing attributes for label <code>(string)</code>, size{" "}
            <code>(string)</code>, value <code>(string || number)</code> and a
            placeholder <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">
              {`<InputText 
  label="Full Name"
  placeholder="primary"
  size="fluid"
  onChange="doSomething"
/>`}
            </code>
          </pre>
        </div>

        <FooterMessage />
      </div>
    );
  }
}

export default InputSelectPage;
