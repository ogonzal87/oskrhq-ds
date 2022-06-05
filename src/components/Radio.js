import React from "react";

const Radio = ({ isChecked, name, label, ...rest }) => (
  <label className="og-radio-container">
    <input type="radio" defaultChecked={isChecked} name {...rest} />
    <span className="og-radio" />
    <span className="og-text-style-body2">{label}</span>
  </label>
);

export default Radio;
