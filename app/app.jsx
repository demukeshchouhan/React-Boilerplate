import React, {Component} from 'react';
import {render} from "react-dom";
import TodoApp from "./components/TodoApp";

require("./sass/app.scss");

class App extends Component {
  render() {
    return(
      <div className="container">
        <TodoApp />
      </div>
    );
  }
}


render(<App />, document.getElementById("app"));