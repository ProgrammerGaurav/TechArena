import React from "react";

const EventCard = ({ event }) => {
	return (
		<div className="eventcard">
			<img src={event.img} alt="" />
			<div className="title">{event.title}</div>
			<div className="subtitle">{event.subtitle}</div>
			<div className="register-btn">register</div>
		</div>
	);
};

export default EventCard;
