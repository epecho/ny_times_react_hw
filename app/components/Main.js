// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Search from './children/Search';
import Save from './children/Save';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <div className="jumbotron">
              <h2><strong>NYT React Home Work</strong></h2>
              <p><em>A journey through the whimsical world of React Routing</em></p>
              <hr />
              <p>
                <Link to="/Search"><button className="btn btn-primary btn-lg">Search</button></Link>
                <Link to="/Save"><button className="btn btn-danger btn-lg">Save</button></Link>
              </p>
            </div>
            <div className = "container">

                <Route path="/Search" component={Search}/>
                <Route path="/Saved" component={Save}/>
              </div>
            </div>

      </Router>
    );
  }
}

export default Main;
