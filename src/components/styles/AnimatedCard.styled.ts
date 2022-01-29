import styled from "styled-components";
import defaultImage from "../../static/images/animated_card_default_img.jpg";

interface StyledCardProps {
  imageLink?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  color: var(--primary-color-light);
  background-image: ${({ imageLink }) =>
    `url(${imageLink ? imageLink : defaultImage})`};
  background-size: contain;
  padding: 10rem 0 0;
  max-width: 35ch;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledCardContent = styled.div`
  padding: 1.5rem;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.5) 10%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(65%);
  transition: transform 500ms ease;

  & > *:not(:first-child) {
    opacity: 0;
    transition: opacity 500ms linear;
  }

  ${StyledCard}:hover & {
    transform: translateY(0);
  }

  ${StyledCard}:hover & > *:not(:first-child) {
    opacity: 1;
  }
`;

export const StyledCardHeader = styled.h2`
  position: relative;

  &:after {
    content: "";
    background: var(--light-green-color);
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }

  ${StyledCard}:hover &:after {
    transform: scaleX(1);
  }
`;

export const StyledCardBody = styled.p`
  margin-top: 1rem;
  color: rgb(255 255 255 / 0.8);
`;

export const StyledCardLink = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: var(--primary-color-dark);
  background-color: var(--light-green-color);
  padding: 0.5rem 1rem;
  margin-top: 0.6rem;
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    background-color: var(--primary-color-light);
  }
`;
