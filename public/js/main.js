import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Header = require('../components/Header');
const Home = require('../views/Home');
const About = require('../views/About');

class App extends React.Component {
  render()
  {
    return (
    <Router>
     <div>
     <Header />
      <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
      </div>
   </Router>

    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
