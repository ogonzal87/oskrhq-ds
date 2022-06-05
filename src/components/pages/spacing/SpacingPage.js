import React from "react";
import "../../../styles/_styles.scss";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import Prism from "prismjs";
import "../../../styles/3-application/prism.css";

class SpacingPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="main-content">
        <div className="container">
          <h1>Spacing</h1>

          <h4 className="subheading">
            Using a geometric progression scale to create consistency and rhythm
            in space.
          </h4>

          <h4>Fixed Space</h4>

          <div className="layout-explanation">
            <div>
              <p>
                Digital Screens are made of a grid of teeny-tiny pixels. Kind of
                like a microscopic net. Following this mental model, I use a
                Soft and Hard 4-Point-Grid System combination. This means that
                space uses multiples of 4px to define the dimensions, padding,
                and margin of block and inline elements. This ensures all
                measures follow the same spacing rules and avoids headaches when
                designers discuss space with developers.
              </p>
            </div>
            <div>
              <p>
                Why 4px? Regardless of form factor, most popular screen sizes
                are divisible by four on at least one axis. - usually both.
              </p>
              <p>
                The system has a predictable scale to measure fixed spacing.
              </p>
            </div>
          </div>

          <section className="item-spacing-list">
            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen1" />
              <code>$space-01</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen2" />
              <code>$space-02</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen3" />
              <code>$space-04</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen4" />
              <code>$space-08</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen5" />
              <code>$space-12</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen6" />
              <code>$space-16</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen7" />
              <code>$space-20</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen8" />
              <code>$space-24</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen9" />
              <code>$space-32</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen10" />
              <code>$space-40</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen11" />
              <code>$space-48</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen12" />
              <code>$space-64</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen13" />
              <code>$space-80</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen14" />
              <code>$space-96</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen15" />
              <code>$space-128</code>
            </div>

            <div className="item-spacing-list__item">
              <div className="item-spacing-list__item_specimen16" />
              <code>$space-160</code>
            </div>
          </section>

          <h4>Usage</h4>

          <p>
            For fixed spacing, make use of the sass function{" "}
            <code>og-space($variable)</code> where <code>$variable</code> is one
            of the values in the scale above.
          </p>

          <pre>
            <code className="language-css">
              {`.ball {
  height: og-space(space-40);
  width: og-space(space-40);
  border-radius: og-shape(circle, default);
  background: og-color(background, brand);
}`}
            </code>
          </pre>
        </div>
        <FooterMessage />
      </div>
    );
  }
}

export default SpacingPage;
