import React from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledCardHeader,
  StyledCardBody,
  StyledCardLink,
} from "./styles/AnimatedCard.styled";

interface Props {
  cardHeader: string;
  cardBody: string;
  cardLink: string;
  imageLink?: string; // https link
}

const AnimatedCard: React.FC<Props> = ({
  cardHeader,
  cardBody,
  cardLink,
  imageLink,
}) => {
  return (
    <StyledCard imageLink={imageLink}>
      <StyledCardContent>
        <StyledCardHeader>{cardHeader}</StyledCardHeader>
        <StyledCardBody>{cardBody}</StyledCardBody>
        <StyledCardLink href={cardLink}>Learn More</StyledCardLink>
      </StyledCardContent>
    </StyledCard>
  );
};

export default AnimatedCard;
