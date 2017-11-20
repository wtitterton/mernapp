import React from 'react';

class OrganisationInfo extends React.Component {

  render()
  {
    return (
      <div id="organisation-info">
        <h1 className="section-title col-12">{this.props.match.params.organisation}</h1>
      </div>
    )
  }
}

module.exports = OrganisationInfo;
