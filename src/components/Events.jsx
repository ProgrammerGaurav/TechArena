import React from "react";
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import technicalEvents from "../data/technicalEvents";
import nonTechnicalEvents from "../data/nonTechnicalEvents";
import gamingEvents from "../data/gamingEvents";

import EventCard from "./EventCard";

const Events = () => {
	const settings = {
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: technicalEvents.length > 3,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	const gamingSettings = {
		infinite: false,
		slidesToShow: 2,
	};
	return (
		<div className="events">
			<div className="technical-events event">
				<div className="container">
					<div className="event-title">Technical Event</div>
					<div className="cards">
						<Slider {...settings}>
							{technicalEvents.map((event, index) => (
								<EventCard key={index} event={event} />
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className="non-technical-events event">
				<div className="container">
					<div className="event-title">Non-Technical Event</div>
					<div className="cards">
						<Slider {...settings}>
							{nonTechnicalEvents.map((event, index) => (
								<EventCard key={index} event={event} />
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className="gaming-events event">
				<div className="container">
					<div className="event-title">Gaming Event</div>
					<div className="cards">
						<Slider {...settings} {...gamingSettings}>
							{gamingEvents.map((event, index) => (
								<EventCard key={index} event={event} />
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
