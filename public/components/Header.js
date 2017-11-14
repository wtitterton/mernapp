import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
class Header extends React.Component {

render()
{
  return (
    <div className="header">
       <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
       </ul>
     </div>
  );
}

}

module.exports = Header;
