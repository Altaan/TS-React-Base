import React from "react";
import GlobalStyle from "./components/styles/globalStyles";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LoadingIndicator />
      <p>testing</p>
    </React.Fragment>
  );
}

export default App;
