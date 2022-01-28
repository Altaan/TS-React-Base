import React from "react";
import GlobalStyle from "./components/styles/globalStyles";
import AnimatedCard from "./components/AnimatedCard";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AnimatedCard
        cardHeader="Animated Card with looooooong header"
        cardBody="Some description for the card and some more text to check how the description looks like with long text"
        cardLink="/take/me/somewhere"
      />
    </React.Fragment>
  );
}

export default App;
