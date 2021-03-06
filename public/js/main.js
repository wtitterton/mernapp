import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Header = require('../components/Header');
const Footer = require('../components/footer');
const Home = require('../views/Home');
const About = require('../views/About');
const AddContent = require('../views/AddContent');
const DisorderInfo = require('../views/disorderInfo');
const OrganisationInfo = require('../views/organisationInfo');
class App extends React.Component {
  render()
  {
    return (
    <Router>
     <div>
       <Header />
       <div id="app-wrap">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/AddContent" component={AddContent}/>
          <Route path="/disorderInfo/:disorder" component={DisorderInfo}/>
          <Route path="/organisationInfo/:organisation" component={OrganisationInfo} />
        </div>
        <Footer />
      </div>
   </Router>

    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
