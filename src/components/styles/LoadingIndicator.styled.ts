import styled from "styled-components";

export const StyledLoadingIndicator = styled.div`
  width: 5rem;
  display: flex;
  flex-wrap: wrap;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  & span {
    background-color: hsl(0 100% 50%);
    margin: 0.25rem;
    width: 2rem;
    height: 2rem;
    animation: scale 1s linear infinite;
  }

  @keyframes scale {
    50% {
      transform: scale(1.2);
    }
  }

  & span:nth-child(1) {
    border-radius: 50% 50% 0 50%;
    background-color: hsl(11 75% 65%);
    transform-origin: bottom right;
  }

  & span:nth-child(2) {
    border-radius: 50% 50% 50% 0;
    background-color: hsl(230 75% 65%);
    transform-origin: bottom left;
    animation-delay: 0.5s;
  }

  & span:nth-child(3) {
    border-radius: 50% 0 50% 50%;
    background-color: hsl(340 85% 75%);
    transform-origin: top right;
    animation-delay: 1.5s;
  }

  & span:nth-child(4) {
    border-radius: 0 50% 50% 50%;
    background-color: hsl(41 85% 75%);
    transform-origin: top left;
    animation-delay: 1s;
  }
`;
