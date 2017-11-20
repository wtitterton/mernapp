import React from "react";
const Slider = require('../components/slider');
const Card = require('../components/Card');
import Grid from '../css/simple-grid.css';
import style from '../css/style.css';

class Home extends React.Component {
  render()
  {
    return (
      <div id="Home">

         <Slider />
         <div className="container">
            <div className="row">
              <form id="search">
                <input type="text" placeholder="search mental disorder"/>
                <button className="btn" value="search"><i className="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>
            <div className="row">
              <section className="clearfix">
                <Card name="Deppression" imgSrc="https://www.governmentjobs.com/Content/Images/CategoryIcons/mental-health.png" />
                <Card name="Anxiety" imgSrc="https://carleton.ca/health/wp-content/uploads/fs_icon_depression-1-240x240.png" />
                <Card name="schizophrenia" imgSrc="http://springfieldunitedway.org/wp-content/uploads/2016/01/mental_health_icon.png" />
                <Card name="Deppression" imgSrc="https://www.governmentjobs.com/Content/Images/CategoryIcons/mental-health.png" />
                <Card name="Anxiety" imgSrc="https://carleton.ca/health/wp-content/uploads/fs_icon_depression-1-240x240.png" />
                <Card name="schizophrenia" imgSrc="http://springfieldunitedway.org/wp-content/uploads/2016/01/mental_health_icon.png" />
              </section>
            </div>
          </div>
      </div>
    )
  }
}

module.exports = Home;
