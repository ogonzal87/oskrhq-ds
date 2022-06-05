import React from "react";
import Logo from "../../../assets/logo/og-logo.png";
import LeftNavFooter from "../LeftNavFooter/LeftNavFooter";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  list-style: none;
  width: 100%;
`;

let activeStyle = {
  textDecoration: "underline",
  color: "#5900FF"
};

class LeftNav extends React.Component {
  state = { sublistIsShowing: false };

  toggleSublist = () => {
    this.setState({ sublistIsShowing: !this.state.sublistIsShowing });
  };

  render() {
    return (
      <div className="left-nav">
        <nav>
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={Logo} alt="Logo" className="og-logo" />
          </NavLink>

          <NavList>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/color/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Color
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/typography/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Typography
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/spacing/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Space
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/border/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Border
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shape/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Shape
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/elevation/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Elevation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/iconography/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Iconography
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/motion/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Motion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/layout/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Layout
              </NavLink>
            </li>

            <li onClick={this.toggleSublist}>
              <a className="left-nav-component-anchor">
                Components
                <span>
                  <i className="material-icons og-size-small og-select-chevron-down">
                    {`keyboard_arrow_${
                      this.state.sublistIsShowing ? "down" : "right"
                    }`}
                  </i>
                </span>
              </a>
              <ul
                className={`leftnav-subnav-list ${
                  this.state.sublistIsShowing ||
                  (typeof window !== "undefined" &&
                    window.location.href.includes("components"))
                    ? "leftnav-subnav-list-is-showing"
                    : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/components/avatar/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Avatar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/button/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Button
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/checkbox/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Checkbox
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/input-search/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Input Search
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/input-select/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Input Select
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/input-text/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Input Text
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/radio/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Radio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/switch/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Switch
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/components/textarea/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Text Area
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/playground/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Playground
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
          </NavList>
        </nav>

        <LeftNavFooter />
      </div>
    );
  }
}

export default LeftNav;
