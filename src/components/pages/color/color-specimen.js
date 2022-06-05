import React from "react";
import { ReactComponent as Splatter1 } from "../../../assets/brush/splatter1.svg";
import { ReactComponent as Splatter2 } from "../../../assets/brush/splatter2.svg";
import { ReactComponent as Splatter3 } from "../../../assets/brush/splatter3.svg";
import { ReactComponent as Splatter4 } from "../../../assets/brush/splatter4.svg";

export const ColorSpecimen1 = ({ name, children }) => (
  <div className="color-specimen">
    <Splatter1 className={name} width="80" height="80" viewBox="0 0 40 40" />
    <p>{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimen2 = ({ name, children }) => (
  <div className="color-specimen">
    <Splatter2 className={name} width="80" height="80" viewBox="0 0 40 40" />
    <p>{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimen3 = ({ name, children }) => (
  <div className="color-specimen">
    <Splatter3 className={name} width="80" height="80" viewBox="0 0 40 40" />
    <p>{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimen4 = ({ name, children }) => (
  <div className="color-specimen">
    <Splatter4 className={name} width="80" height="80" viewBox="0 0 40 40" />
    <p>{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimenText = ({ name, children }) => (
  <div className="color-specimen-text">
    <h1 className={` ${name}`}>Aa</h1>
    <p className="og-text-style-caption">{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimenBorder = ({ name, children }) => (
  <div className="color-specimen-border">
    <div className={name} />
    <p className="og-text-style-caption">{children || `$${name}`}</p>
  </div>
);

export const ColorSpecimenIcon = ({ name, children }) => (
  <div className={`${name} color-specimen-icon`}>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z" />
    </svg>
    <p className="og-text-style-caption">{children || `$${name}`}</p>
  </div>
);
