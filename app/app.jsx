import React, {Component} from 'react';
import {render} from "react-dom";

require("./sass/app.scss");

class App extends Component {
  render() {
    return(
      <div className="container">
        React Boilerplate
      </div>
    );
  }
}


render(<App />, document.getElementById("app"));
