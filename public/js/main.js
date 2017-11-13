import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
const Home = require('../views/Home');
const About = require('../views/About');

class App extends React.Component {
  render()
  {
    return (
      <Router>
     <div>
       <ul>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
      </ul>

       <hr/>

       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
      </div>
   </Router>

    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
