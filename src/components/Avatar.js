import React from "react";

const Avatar = ({ size, ...rest }) => {
  const avatarImgSizeClass = size ? `og-avatar-${size}` : "";
  return (
    <div className="og-avatar-container">
      <img
        className={`og-avatar ${avatarImgSizeClass}`}
        {...rest}
        alt="Person"
      />
    </div>
  );
};

export default Avatar;
