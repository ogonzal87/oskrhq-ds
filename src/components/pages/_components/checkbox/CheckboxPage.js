import React from "react";
import Checkbox from "../../../Checkbox";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

class CheckboxPage extends React.Component {
  state = {
    checkboxA: true,
    checkboxB: false
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
          <h1>Checkbox</h1>
          <h2 className="subheading">
            Binary checkboxes allow the selection of multiple options from a set
          </h2>
          <div className="column-system-2-col">
            <div className="column">
              <Checkbox
                name="checkboxA"
                labelText="Unchecked Checkbox"
                onChange={this.handleChange("checkboxA")}
                value="checkboxA"
                checked={this.state.checkboxA}
              />
            </div>
            <div className="column">
              <Checkbox
                name="checkboxB"
                labelText="Checked Checkbox"
                onChange={this.handleChange("checkboxB")}
                value="checkboxB"
                checked={this.state.checkboxB}
              />
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            Checkboxes are tools the user has to communicate something to the
            app. In this app they are a Presentational React Components that you
            can use by simply instantiating a <code>{`<Checkbox />`}</code> tag
            and passing attributes for name <code>(string)</code>, onChange{" "}
            <code>(function)</code>, checked <code>(boolean)</code>, and
            labelText <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">{`class DemoPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <Checkbox
        name="checkboxA"  
        labelText="Option 1"
        onChange={this.handleChange('checkboxA')}
        value="checkboxB"
        checked={this.state.checkboxA}
      />
              
      <Checkbox
        name="checkboxB"  
        labelText="Option 2"
        onChange={this.handleChange('checkboxB')}
        value="checkboxB"
        checked={this.state.checkboxB}
      />
    )
  }
}`}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default CheckboxPage;
