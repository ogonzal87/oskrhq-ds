import React from "react";
import "./left-nav-footer.scss";
import FigmaImg from "../../../assets/logo/figma.png";
import GithubImg from "../../../assets/logo/github-brand-mark.png";

const DSLeftNavFooter = () => (
  <div className="leftnav-footer-wrapper">
    <div className="leftnav-resources-container">
      <a
        href="https://www.figma.com/community/file/1145046603908672649"
        target="_blank"
        rel="noopener noreferrer"
        className="leftnav-resource"
      >
        <img src={FigmaImg} alt="See Sketch UI Kit" />
      </a>
      <a
        href="https://github.com/ogonzal87/oskrhq-design-system"
        target="_blank"
        rel="noopener noreferrer"
        className="leftnav-resource"
      >
        <img src={GithubImg} className="github-img" alt="See Github" />
      </a>
    </div>
  </div>
);

export default DSLeftNavFooter;
