import React from "react";
import AnimatedCard from "./components/AnimatedCard";
import GlobalStyle from "./components/styles/globalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AnimatedCard
        cardHeader="Animated Card"
        cardBody="Some description for the card"
        cardLink="/take/me/somewhere"
      />
    </React.Fragment>
  );
}

export default App;
