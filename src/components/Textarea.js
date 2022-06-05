import React from "react";

const Inputarea = ({ label, ...rest }) => (
  <div className="og-text-area-container">
    <label className="og-text-style-body2 og-text-area-label">{label}</label>
    <textarea
      className="og-text-area-field og-text-style-body1"
      {...rest}
      aria-label={label}
    />
  </div>
);

export default Inputarea;
