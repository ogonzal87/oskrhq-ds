import React from "react";

const Checkbox = ({ labelText, children, ...rest }) => (
  <label className="og-checkbox-container" htmlFor={labelText}>
    <input type="checkbox" className="og-checkbox" {...rest} id={labelText} />
    <i className="material-icons icon-size-small og-checkmark">done</i>
    <span className="og-body2-text-style">{labelText}</span>
  </label>
);

export default Checkbox;
