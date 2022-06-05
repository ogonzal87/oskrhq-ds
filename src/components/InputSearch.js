import React from "react";

const DSInputSearch = ({ placeholder, ...rest }) => (
  <div className="og-input-search-container">
    <input
      type="search"
      placeholder={placeholder || "Search"}
      className="og-input-field og-body1-text-style"
      {...rest}
    />
    <i className="material-icons og-size-small og-search-input-icon">search</i>
  </div>
);

export default DSInputSearch;
