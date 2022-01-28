import styled from "styled-components";
import defaultImage from "../../static/images/animated_card_default_img.jpg";

interface StyledCardProps {
  imageLink?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  color: var(--primary-color-light);
  background-image: ${(props) =>
    `url(${props.imageLink ? props.imageLink : defaultImage})`};
  background-size: cover;
  padding: 10rem 0 0;
  max-width: 40ch;
`;

export const StyledCardContent = styled.div`
  padding: 1.5em;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.5) 10%,
    hsl(0 0% 0% / 1)
  );
`;

export const StyledCardHeader = styled.h2``;

export const StyledCardBody = styled.p``;

export const StyledCardLink = styled.a``;
