import React from 'react';

class Fact extends React.Component {

  render()
  {
    return(

        <div className="fact col-4">
          <p className="fact-number">{this.props.number}</p>
          <p className="the-fact">{this.props.fact}</p>
        </div>

    )
  }

}

module.exports = Fact;
