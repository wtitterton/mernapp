import React from 'react';
import Grid from '../css/simple-grid.css';
class Card extends React.Component {

  render()
  {

    return(
      <div className="card  col-4 ">
        <div className="content vertical-align">

            <img className="round-img" src={ this.props.imgSrc}/>

          <h3>{this.props.name}</h3>
        </div>
      </div>
    )
  }
}

module.exports = Card;
