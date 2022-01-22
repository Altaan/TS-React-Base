import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardLink,
} from "./styles/AnimatedCard.styled";

interface Props {
  cardHeader: string;
  cardBody: string;
  cardLink: any;
}

const AnimatedCard: React.FC<Props> = ({ cardHeader, cardBody, cardLink }) => {
  return (
    <StyledCard>
      <StyledCardHeader>{cardHeader}</StyledCardHeader>
      <StyledCardBody>{cardBody}</StyledCardBody>
      <StyledCardLink>{cardLink}</StyledCardLink>
    </StyledCard>
  );
};

export default AnimatedCard;
