import React from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./components/List";

// This function is a component
// A component is something that will render or return JSX / HTML
function App() {
  // This is not HTML
  // The component is returning JSX
  return (
    <div className="App">
      <header className="App-header">
        {/* attributes with {} indicate the use of Javascript */}
        <img src={logo} className="App-logo" alt="logo" />
        <List />
      </header>
    </div>
  );
}

export default App;
