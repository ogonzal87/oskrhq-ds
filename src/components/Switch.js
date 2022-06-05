import React from "react";

const Switch = ({ switchName, isChecked, ...rest }) => (
  <div className="og-switch-container">
    <label htmlFor={switchName}>
      <input
        type="checkbox"
        className="og-switch"
        defaultChecked={isChecked}
        {...rest}
        role="switch"
        id={switchName}
      />
      <div className="og-switch-nob" />
    </label>
  </div>
);

export default Switch;
