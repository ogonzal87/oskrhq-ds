import React from "react";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class TypographyPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Typography</h1>
          <h4 className="subheading">
            <i>
              “Typography is more art than engineering—though engineering is
              certainly a part of it”
            </i>{" "}
            - Robert Bringhurst.
          </h4>

          <p className="og-text-style-overline">Anonimous Pro Typeface</p>

          <h4 className="typography-specimen">
            AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789!@#$%
          </h4>

          <p className="typography-type-sample">
            Lorem ipsum dolor amet austin whatever sriracha fixie cold-pressed
            coloring book. Pug hexagon prism, try-hard viral man bun la croix
            vice cardigan. Typewriter lo-fi gochujang seitan. Knausgaard
            shoreditch craft beer, trust fund messenger bag direct trade pork
            belly artisan roof party scenester activated charcoal semiotics.
          </p>

          <div className="typography-type-syles-definition-container">
            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading1">Heading 1</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Light, 96px) -{" "}
                <code>$og-text-style-heading1</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading2">Heading 2</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Light, 60px) -{" "}
                <code>$og-text-style-heading2</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading3">Heading 3</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 48px) -{" "}
                <code>$og-text-style-heading3</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading4">Heading 4</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 34px) -{" "}
                <code>$og-text-style-heading4</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading5">Heading 5</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 24px) -{" "}
                <code>$og-text-style-heading5</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-heading6">Heading 6</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Semibold, 20px) -{" "}
                <code>$og-text-style-heading6</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-subtitle1">Subtitle 1</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 16px) -{" "}
                <code>$og-text-style-subtitle1</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-subtitle2">Subtitle 2</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Semibold, 14px) -{" "}
                <code>$og-text-style-subtitle2</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-body1">Body 1</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 16px) -{" "}
                <code>$og-text-style-body1</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-body2">Body 2</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 14px) -{" "}
                <code>$og-text-style-body2</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-caption">Caption</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 12px) -{" "}
                <code>$og-text-style-caption</code>
              </span>
            </div>

            <div className="typography-type-syles-definition">
              <span className="og-text-style-overline">Overline</span>
              <span className="og-text-style-caption typography-caption-secondary">
                (Anonimous Pro, Regular, 14px) -{" "}
                <code>$og-text-style-overline</code>
              </span>
            </div>
          </div>

          <div className="wrapper-on-dark">
            <div className="typography-type-syles-definition-container">
              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading1">Heading 1</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Light, 96px) -{" "}
                  <code>$og-text-style-heading1</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading2">Heading 2</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Light, 60px) -{" "}
                  <code>$og-text-style-heading2</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading3">Heading 3</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 48px) -{" "}
                  <code>$og-text-style-heading3</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading4">Heading 4</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 34px) -{" "}
                  <code>$og-text-style-heading4</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading5">Heading 5</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 24px) -{" "}
                  <code>$og-text-style-heading5</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-heading6">Heading 6</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Semibold, 20px) -{" "}
                  <code>$og-text-style-heading6</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-subtitle1">Subtitle 1</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 16px) -{" "}
                  <code>$og-text-style-subtitle1</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-subtitle2">Subtitle 2</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Semibold, 14px) -{" "}
                  <code>$og-text-style-subtitle2</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-body1">Body 1</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 16px) -{" "}
                  <code>$og-text-style-body1</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-body2">Body 2</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 14px) -{" "}
                  <code>$og-text-style-body2</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-caption">Caption</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 12px) -{" "}
                  <code>$og-text-style-caption</code>
                </span>
              </div>

              <div className="typography-type-syles-definition">
                <span className="og-text-style-overline">Overline</span>
                <span className="og-text-style-caption typography-caption-secondary">
                  (Anonimous Pro, Regular, 14px) -{" "}
                  <code>$og-text-style-overline</code>
                </span>
              </div>
            </div>
          </div>

          <h4>Usage</h4>

          <p>
            Every typographic style defined above already has a utility class
            you can use, such as <code>.og-text-style-body1</code>. Although not
            advised, you can create your own from a standard base of utility
            sass functions; <code>og-font-size()</code>,{" "}
            <code>og-font-weight()</code>, <code>og-line-height()</code>, and{" "}
            <code>og-color()</code>. When creating your own combination, keep in
            mind that these have to complement each other, especially
            line-height and font-size.
          </p>

          <pre>
            <code className="language-css">
              {`.my-new-ugly-big-text {
  font-size:   og-font-size(heading1);
  line-height: og-line-height(heading1);
  font-weight: og-font-weight(bold);
  color:       og-color(text, link);
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default TypographyPage;
