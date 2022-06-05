import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import Button from "../../../Button";
import styled from "styled-components";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

const SpecimenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 12px;
  margin-bottom: 24px;
`;

class ButtonsPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Buttons</h1>

          <h4 className="subheading">
            Buttons make common actions immediately visible and easy to perform
            with one click or tap.
          </h4>

          <h4>Types</h4>
          <SpecimenWrapper>
            <Button type="primary" size="medium">
              Primary
            </Button>
            <Button type="secondary" size="medium">
              Secondary
            </Button>
            <Button type="positive" size="medium">
              Positive
            </Button>
            <Button type="info" size="medium">
              Info
            </Button>
            <Button type="negative" size="medium">
              Negative
            </Button>
            <Button type="ghost" size="medium">
              Ghost
            </Button>
          </SpecimenWrapper>

          <SpecimenWrapper>
            <Button icon="face" type="primary" circle />
            <Button icon="face" type="secondary" circle />
            <Button icon="face" type="positive" circle />
            <Button icon="face" type="info" circle />
            <Button icon="face" type="negative" circle />
            <Button icon="face" type="ghost" circle />
          </SpecimenWrapper>

          <h4>Sizes</h4>
          <Button
            type="primary"
            size="small"
            style={{ marginBottom: `16px`, display: "block" }}
          >
            Small
          </Button>
          <Button
            type="primary"
            size="medium"
            style={{ marginBottom: `16px`, display: "block" }}
          >
            Medium
          </Button>
          <Button type="primary" size="medium" fluid>
            Fluid
          </Button>

          <h4 className="-usage-title">Usage</h4>

          <p>
            Buttons are tools the user has to communicate something to the app
            and perform a desired action. In this system they are a
            Presentational React Components that you can use by simply
            instantiating a <code>Button</code> tag and passing attributes for
            type <code>(string)</code>, and size <code>(string)</code>. You can
            also use a Circle Button by instantiating a <code>Button</code> tag
            and passing attributes for icon <code>(string)</code> and type{" "}
            <code>(string)</code>. Check out the Iconography page as well.
          </p>

          <pre>
            <code className="language-javascript">{`<Button 
  type="primary"
  size="medium"
  onClick={doSomething}>
  Save
</Button>

<Button
  onClick={doSomething}
  circle  
  icon="face" 
  type="primary"
/>`}</code>
          </pre>
        </div>

        <FooterMessage />
      </div>
    );
  }
}

export default ButtonsPage;
