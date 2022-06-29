import React from "react";
import GlobalStyle from "./components/styles/globalStyles";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SearchBar
        onClickSearch={() => alert("Searching...")}
        searchOnEnterPress
        darkBackground
      />
    </React.Fragment>
  );
}

export default App;
