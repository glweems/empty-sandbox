import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="title">CodeSandbox</h1>
      </div>
      <p>Whoops!</p>
      <p>You forgot to set the sandbox prop</p>
      <code>sandbox='empty-sandbox-w6puv'</code>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
