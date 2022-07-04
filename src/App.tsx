import React from "react";
import GlobalStyle from "./components/styles/globalStyles";
import NavigationBar from "./components/NavigatioBar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavigationBar
        items={[
          { title: "Home", link: "/to/home/" },
          { title: "About", link: "/to/about/" },
          { title: "Contact", link: "/to/contact/" },
        ]}
        logoLink="Logo"
      />
    </React.Fragment>
  );
}

export default App;
