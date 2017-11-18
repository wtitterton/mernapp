import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import slideCss from '../css/slider.css';
class SliderExample extends React.Component {
	render(){
		let settings = {
			dots: true,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 4000,
			className: 'slider'
		}



		return (
			<Slider {...settings} >
				<div  className="slide1"></div>
				<div><img src='../images/slide2.jpg' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
			</Slider>
			)
	}
}
module.exports = SliderExample;
