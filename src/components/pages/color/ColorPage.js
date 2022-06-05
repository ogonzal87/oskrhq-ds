import React from "react";
import {
  ColorSpecimen1,
  ColorSpecimen2,
  ColorSpecimen3,
  ColorSpecimen4,
  ColorSpecimenText,
  ColorSpecimenBorder,
  ColorSpecimenIcon,
} from "./color-specimen";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class ColorPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Color</h1>
          <h2 className="subheading">
            Like physical paint, digital color is applied to surfaces such as
            backgrounds, text, icons, and borders.
          </h2>

          <h4>Backgrounds</h4>
          <div className="color-page-grid">
            <ColorSpecimen1 name="background-brand" />
            <ColorSpecimen2 name="background-brand-focused" />
            <ColorSpecimen3 name="background-brand-hover" />

            <ColorSpecimen1 name="background-positive" />
            <ColorSpecimen2 name="background-positive-focused" />
            <ColorSpecimen3 name="background-positive-hover" />

            <ColorSpecimen1 name="background-negative" />
            <ColorSpecimen2 name="background-negative-focused" />
            <ColorSpecimen3 name="background-negative-hover" />

            <ColorSpecimen1 name="background-info" />
            <ColorSpecimen2 name="background-info-focused" />
            <ColorSpecimen3 name="background-info-hover" />

            <ColorSpecimen3 name="background-canvas" />
            <ColorSpecimen4 name="background-canvas-tinted" />
            <ColorSpecimen1 name="background-canvas-shaded" />
            <ColorSpecimen1 name="background-app" />

            <ColorSpecimen3 name="background-scrim" />

            <div />

            <ColorSpecimen4 name="background-brand-on-dark" />
            <ColorSpecimen1 name="background-brand-on-dark-focused" />
            <ColorSpecimen2 name="background-brand-on-dark-hover" />
            <ColorSpecimen4 name="background-positive-on-dark" />
            <ColorSpecimen1 name="background-positive-on-dark-focused" />
            <ColorSpecimen4 name="background-negative-on-dark" />
            <ColorSpecimen1 name="background-negative-on-dark-focused" />
            <ColorSpecimen4 name="background-info-on-dark" />
            <ColorSpecimen1 name="background-info-on-dark-focused" />
            <ColorSpecimen4 name="background-canvas-on-dark" />
            <ColorSpecimen4 name="background-canvas-tinted-on-dark" />
            <ColorSpecimen1 name="background-canvas-shaded-on-dark" />
            <ColorSpecimen1 name="background-app-on-dark" />
          </div>

          <br />
          <br />
          <br />
          <br />

          <h4>Texts</h4>
          <div className="color-page-grid">
            <ColorSpecimenText name="text-primary" />
            <ColorSpecimenText name="text-primary-disabled" />

            <ColorSpecimenText name="text-secondary" />
            {/* <ColorSpecimen name="text-secondary-disabled">*/}

            <ColorSpecimenText name="text-link" />
            <ColorSpecimenText name="text-link-focused" />

            <ColorSpecimenText name="text-negative" />
            <ColorSpecimenText name="text-negative-focused" />
            {/* <ColorSpecimen name="text-negative-disabled">*/}

            <ColorSpecimenText name="text-positive" />
            <ColorSpecimenText name="text-positive-focused" />
            {/* <ColorSpecimen name="text-negative-disabled">*/}

            <ColorSpecimenText name="text-info" />
            <ColorSpecimenText name="text-info-focused" />
            {/* <ColorSpecimen name="text-negative-disabled">*/}

            <div />

            <ColorSpecimenText name="text-primary-on-dark" />
            {/* <ColorSpecimen name="text-primary-on-dark-focused">*/}
            <ColorSpecimenText name="text-primary-on-dark-disabled" />

            <ColorSpecimenText name="text-secondary-on-dark" />
            {/* <ColorSpecimen name="text-secondary-on-dark-focused">*/}
            {/* <ColorSpecimen name="text-secondary-on-dark-disabled">*/}

            <ColorSpecimenText name="text-link-on-dark" />
            <ColorSpecimenText name="text-link-on-dark-focused" />
            {/* <ColorSpecimen name="text-link-on-dark-disabled">*/}

            <ColorSpecimenText name="text-negative-on-dark" />
            <ColorSpecimenText name="text-negative-on-dark-focused" />
            {/* <ColorSpecimen name="text-negative-on-dark-disabled">*/}

            <ColorSpecimenText name="text-positive-on-dark" />
            <ColorSpecimenText name="text-positive-on-dark-focused" />
            {/* <ColorSpecimen name="text-negative-on-dark-disabled">*/}

            <ColorSpecimenText name="text-info-on-dark" />
            <ColorSpecimenText name="text-info-on-dark-focused" />
            {/* <ColorSpecimen name="text-negative-on-dark-disabled">*/}
          </div>

          <br />
          <br />
          <br />
          <br />

          <h4>Borders</h4>
          <h5 className="og-text-style-heading5">Primary</h5>
          <div className="border-page-grid">
            <ColorSpecimenBorder name="border-primary" />
            <div className="border-specimen-on-dark">
              <ColorSpecimenBorder name="border-primary-on-dark" />
            </div>
            <ColorSpecimenBorder name="border-primary-darker" />
          </div>

          <h5 className="og-text-style-heading5">Secondary</h5>
          <div className="border-page-grid">
            <ColorSpecimenBorder name="border-secondary" />
            <div className="border-specimen-on-dark">
              <ColorSpecimenBorder name="border-secondary-on-dark" />
            </div>
          </div>

          <h5 className="og-text-style-heading5">Brand</h5>
          <div className="border-page-grid">
            <ColorSpecimenBorder name="border-brand" />
            <div className="border-specimen-on-dark">
              <ColorSpecimenBorder name="border-brand-on-dark" />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <h4>Icons</h4>
          <div className="color-page-grid">
            <ColorSpecimenIcon name="icon-brand" />
            <ColorSpecimenIcon name="icon-default" />
            <ColorSpecimenIcon name="icon-positive" />
            <ColorSpecimenIcon name="icon-negative" />
            <ColorSpecimenIcon name="icon-info" />
            <div />
            <ColorSpecimenIcon name="icon-brand-on-dark" />
            <ColorSpecimenIcon name="icon-default-on-dark" />
            <ColorSpecimenIcon name="icon-positive-on-dark" />
            <ColorSpecimenIcon name="icon-negative-on-dark" />
            <ColorSpecimenIcon name="icon-info-on-dark" />
          </div>

          <h4>Usage</h4>

          <p>
            All UI elements make use of a sass function;{" "}
            <code>og-color($surface, $type)</code> where <code>$surface</code>{" "}
            is the object you are painting and the <code>$type</code> is one the
            types of colors available for that surface. This ensures consistency
            it tells me what colors I can use for a given surface/object I am
            painting.
          </p>

          <pre>
            <code className="language-css">
              {`$og-button-primary-background-color: og-color(background, brand); // Since I am coloring a background
$og-button-primary-text-color: og-color(text, primary-on-dark); // Since I am coloring a text
        
.og-button--primary {
    color: $og-button-primary-text-color;
    background: $og-button-primary-background-color;
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default ColorPage;
