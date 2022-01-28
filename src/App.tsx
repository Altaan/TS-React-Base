import React from "react";
import GlobalStyle from "./components/styles/globalStyles";
import AnimatedCard from "./components/AnimatedCard";

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
