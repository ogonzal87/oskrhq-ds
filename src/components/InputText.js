import React from "react";

const InputText = ({ label, ...rest }) => (
  <div className="og-input-text-container">
    <label className="og-text-style-body2 og-input-label">{label}</label>
    <input
      className="og-input-field og-text-style-body1"
      {...rest}
      aria-label={label}
    />
  </div>
);

export default InputText;
