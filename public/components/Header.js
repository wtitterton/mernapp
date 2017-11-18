import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Grid from '../css/simple-grid.css';
import style from '../css/style.css';


class Header extends React.Component {

render()
{
  return (
    <header className="header">

        <div className="row">


          <nav className="col-12">
             <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/AddContent">Find Organisation</NavLink></li>
                <li><NavLink to="/AddContent">Facts</NavLink></li>
                <li><NavLink to="/AddContent">Tips and Advice</NavLink></li>
             </ul>
           </nav>
         </div>

    </header>
  );
}

}

module.exports = Header;
