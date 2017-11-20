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

				<div  className="slide1">
					<img src='../images/slide1.jpg' />
					<div className="message-con">
						<h1 className="message">“Never apologize to others for
						their misunderstanding of who you are.”</h1>
					</div>
				</div>
				<div>
					<img src='../images/slide2.jpg' />
					<div className="message-con">
						<h1 className="message">“Never apologize to others for
						their misunderstanding of who you are.”</h1>
					</div>
				</div>
				<div  className="slide1">
					<img src='../images/slide1.jpg' />
					<div className="message-con">
						<h1 className="message">“Never apologize to others for
						their misunderstanding of who you are.”</h1>
					</div>
				</div>
			</Slider>
			)
	}
}
module.exports = SliderExample;
