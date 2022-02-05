import React from "react";
import { StyledLoadingIndicator } from "./styles/LoadingIndicator.styled";

const LoadingIndicator: React.FC = () => {
  return (
    <StyledLoadingIndicator>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
