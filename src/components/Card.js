import React from "react";

const Card = ({ children, styles, height }) => (
  <div className={`og-card ${styles}`} style={{ height: height }}>
    {children}
  </div>
);

export default Card;
