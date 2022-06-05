import React from "react";

// const Button = ({ type, size, children }) => (
//   <button className={`og-button--${type} og-button--${size}`}>
//     {children}
//   </button>
// );

const getClassNameFromProp = (prop, prefix) =>
  (prop && `${prefix}${prop}`) || "";
const getSizeClassName = (size, prefix) => getClassNameFromProp(size, prefix);
const getTypeClassName = (type, prefix) => getClassNameFromProp(type, prefix);

const Button = ({ fluid, type, circle, icon, size, children, ...rest }) => {
  const prefix = circle ? "og-circle-button--" : "og-button--";
  return circle ? (
    <button
      className={`og-circle-button ${getTypeClassName(type, prefix)}`}
      {...rest}
    >
      {icon ? (
        <i className="material-icons og-icon-small">{icon}</i>
      ) : (
        { children }
      )}
    </button>
  ) : (
    <button
      className={`${getTypeClassName(type, prefix)} ${getSizeClassName(
        size,
        prefix
      )} ${fluid ? "og-button--fluid" : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
