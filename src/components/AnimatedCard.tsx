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
  cardLink: string;
}

const AnimatedCard: React.FC<Props> = ({ cardHeader, cardBody, cardLink }) => {
  return (
    <StyledCard>
      <StyledCardHeader>{cardHeader}</StyledCardHeader>
      <StyledCardBody>{cardBody}</StyledCardBody>
      <StyledCardLink href={cardLink}>Learn More</StyledCardLink>
    </StyledCard>
  );
};

export default AnimatedCard;
