import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import Textarea from "../../../Textarea";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

class TextareaPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true,
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Textarea</h1>

          <h4 className="subheading">
            Text Area fields allow users to input long text. Use when the
            application requires long-form content from the user.
          </h4>

          <div className="column-system-2-col">
            <div className="column">
              <Textarea
                label="Comment (Optional)"
                placeholder="placeholder..."
                rows="4"
              />
            </div>
            <div className="column">
              <Textarea
                label="Comment (Optional)"
                defaultValue="Lorem ipsum dolor amet blue bottle street art iceland health goth chartreuse snackwave cornhole drinking vinegar microdosing XOXO."
                rows="4"
              />
            </div>
          </div>

          <h4 className="ds-usage-title">Usage</h4>

          <p>
            Text Areas are tools the user has to communicate something to the
            app. In this system, they are a Presentational React Components that
            you can use by simply instantiating a <code>TextArea</code> tag and
            passing attributes for label <code>(string)</code>, cols{" "}
            <code>(string)</code>, value <code>(string)</code> and a placeholder{" "}
            <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">
              {`<TextArea 
  label="Comment (Optional)"
  placeholder="Type..."
  cols="4"
/>`}
            </code>
          </pre>
        </div>

        <FooterMessage />
      </div>
    );
  }
}

export default TextareaPage;
