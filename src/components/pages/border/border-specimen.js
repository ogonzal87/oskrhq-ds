import React from "react";
import styled from "styled-components";

const Specimen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: 200px;
`;

const BorderSpecimen = ({ name, children }) => (
  <Specimen>
    <div className={`border-specimen ${name}`} />
    <p>{children || `$${name}`}</p>
  </Specimen>
);

export default BorderSpecimen;
