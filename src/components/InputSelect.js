import React from "react";

const InputSelect = ({ label, value, children, ...rest }) => (
  <div className="og-input-select-container">
    <label className="og-text-style-body2 og-input-label">{label}</label>
    <select
      className="og-input-field og-text-style-body1"
      value={value}
      {...rest}
      aria-label={label}
    >
      {children}
    </select>
    <span>
      <i className="material-icons og-size-small og-select-chevron-down">
        keyboard_arrow_down
      </i>
    </span>
  </div>
);

export default InputSelect;
