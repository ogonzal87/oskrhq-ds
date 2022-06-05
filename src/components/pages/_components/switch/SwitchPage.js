import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import Switch from "../../../Switch";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

class SwitchPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true
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
          <h1>Switch</h1>

          <h4 className="subheading">
            Binary switches toggles the state of a single settings option.{" "}
          </h4>

          <div className="column-system-2-col">
            <div className="column">
              <Switch
                name="checkedA"
                onChange={this.handleChange("checkedA")}
                defaultChecked={this.state.checkedA}
              />
            </div>
            <div className="column">
              <Switch
                name="checkedB"
                onChange={this.handleChange("checkedB")}
                defaultChecked={this.state.checkedB}
              />
            </div>
          </div>

          <h4 className="ds-usage-title">Usage</h4>

          <p>
            Switches are tools the user has to communicate something to the app.
            In this system they are a Presentational React Components that you
            can use by simply instantiate a <code>Switch</code> tag and passing
            attributes for name <code>(string)</code>, onChange{" "}
            <code>(function)</code>, and checked <code>(boolean)</code>.
          </p>

          <pre>
            <code className="language-javascript">
              {`class DemoPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true,
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    return (
      <Switch
        name="checkedA"  
        onChange={this.handleChange('checkedA')}
        defaultChecked={this.state.checkedA}
      />
              
      <Switch
        name="checkedB"  
        onChange={this.handleChange('checkedB')}
        defaultChecked={this.state.checkedB}
      />
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

export default SwitchPage;
