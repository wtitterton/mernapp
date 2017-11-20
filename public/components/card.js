import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Grid from '../css/simple-grid.css';
class Card extends React.Component {


  render()
  {



    return(
      <NavLink to={'/disorderInfo/' + this.props.name} >
      <div className="card  col-4 ">
        <div className="content vertical-align">

            <img className="round-img" src={ this.props.imgSrc}/>

          <h3>{this.props.name}</h3>
        </div>
      </div>
      </NavLink>
    )
  }
}

module.exports = Card;
