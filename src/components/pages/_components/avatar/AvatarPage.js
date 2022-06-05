import React from "react";
import FooterMessage from "../../../app/FooterMessage/FooterMessage";
import Avatar from "../../../Avatar";
import styled from "styled-components";
import MichaelScottImg from "../../../../assets/avatar-page/michael-scott.jpg";
import Prism from "prismjs";
import "../../../../styles/3-application/prism.css";

const SpecimenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  margin-bottom: 24px;
  align-items: end;
  justify-items: center;
`;

const Specimen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AvatarPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Avatar</h1>

          <h4 className="subheading">
            Avatars allow a person's profile image to be displayed.
          </h4>

          <SpecimenWrapper>
            <Specimen>
              <Avatar src={MichaelScottImg} size="small" />
              <code style={{ marginTop: "8px" }}>small</code>
            </Specimen>
            <Specimen>
              <Avatar src={MichaelScottImg} />
              <code style={{ marginTop: "8px" }}>base</code>
            </Specimen>
            <Specimen>
              <Avatar src={MichaelScottImg} size="medium" />
              <code style={{ marginTop: "8px" }}>medium</code>
            </Specimen>
            <Specimen>
              <Avatar src={MichaelScottImg} size="large" />
              <code style={{ marginTop: "8px" }}>large</code>
            </Specimen>
          </SpecimenWrapper>

          <h4 className="ds-usage-title">Usage</h4>

          <p>
            Avatars are Presentational React Components that you can use by
            simply instantiating a <code>Avatar</code> tag and pass attributes
            for src <code>(string | obj)</code>, and size <code>(string)</code>.
          </p>

          <pre>
            <code className="language-javascript">{`import Img from './img.jpg'
import Avatar from './Avatar'

class DemoPage extends React.Component {
  render() {
    return (
      <Avatar
        src={Img}
        size="large"
      />
    )
  }
}`}</code>
          </pre>
        </div>

        <FooterMessage />
      </div>
    );
  }
}

export default AvatarPage;
