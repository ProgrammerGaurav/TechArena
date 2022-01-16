import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
	return (
		<div className="eventcard">
			<img src={event.img} alt="" />
			<div className="title">{event.title}</div>
			<div className="subtitle">{event.subtitle}</div>
			{event.registerLink ? (
				<a href={event.registerLink} className="register-btn">
					register
				</a>
			) : (
				<Link to="/register" className="register-btn">
					register
				</Link>
			)}
		</div>
	);
};

export default EventCard;
