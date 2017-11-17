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
      <div className="container">
        <div className="row">
          <h1 className="col-6">Logo</h1>

          <nav className="col-6">
             <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/AddContent">Add Content</NavLink></li>
             </ul>
           </nav>
         </div>
      </div>
    </header>
  );
}

}

module.exports = Header;
