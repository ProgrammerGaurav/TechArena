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
	};
	return (
		<div className="taboiz">
			<div className="title">meet our team </div>
			<Slider {...settings} className="slider">
				{[...Array(7)].map((_, i) => (
					<div className="img-container" key={i}>
						<img src={`/assets/taboiz/${i + 1}.jpg`} alt="techarena" />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Taboiz;
