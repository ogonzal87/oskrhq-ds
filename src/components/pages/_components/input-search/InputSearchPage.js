import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import InputSearch from "../../../InputSearch";
import styled from "styled-components";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

const SpecimenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 16px;
  margin-bottom: 24px;
`;

class InputSearchPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Input Search</h1>

          <h4 className="subheading">
            Search Inputs allow users to search data matching a value.
          </h4>

          <InputSearch placeholder="Search Users" autoFocus />

          <div className="column-system-2-col">
            <div className="column">
              <InputSearch defaultValue="John Doe" />
            </div>
          </div>

          <h4 className="-usage-title">Usage</h4>

          <p>
            Input Search is a Presentational React Component that you can use by
            simply instantiating a <code>InputSearch</code> tag and passing an
            optional attribute for placeholder <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">
              {`<InputSearch 
placeholder="Search List"
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

export default InputSearchPage;
