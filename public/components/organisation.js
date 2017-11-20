import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class Organisation extends React.Component
{

  render()
  {
    return (
      <div className="organisation">
        <h3 className="color-heading">{this.props.name}</h3>
        <h5>{this.props.contact}</h5>
        <p>{this.props.excerpt}</p>
        <div className="btn-con">
          <button className="btn btn-pink"><a target="_blank" href={this.props.website}>Visit Website </a> </button>
          <button className="btn"><NavLink to={'/organisationInfo/' + this.props.name}><a  href={this.props.website}>Find out more</a></NavLink></button>
        </div>
      </div>
    )
  }
}

module.exports = Organisation;
