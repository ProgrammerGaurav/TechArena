import React from "react";
import Slider from "react-slick";

const Taboiz = () => {
	const settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};
	return (
		<div className="taboiz">
			<div className="title">meet our team </div>
			<Slider {...settings} className="slider">
				<div className="img-container">
					<img src="/assets/taboiz/1.jpg" alt="" />
				</div>
				<div className="img-container">
					<img src="/assets/taboiz/2.jpg" alt="" />
				</div>
				<div className="img-container">
					<img src="/assets/taboiz/3.jpg" alt="" />
				</div>
			</Slider>
		</div>
	);
};

export default Taboiz;
