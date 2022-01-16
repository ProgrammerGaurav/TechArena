import React from "react";
import eventsLists from "../data/eventlists";

const ExploreCard = ({ eventItem }) => {
	return (
		<div className="card">
			<div className="title">{eventItem.title}</div>
			{eventItem.events.map((event, index) => (
				<div className="event" key={index} dangerouslySetInnerHTML={{ __html: event }} />
			))}
			<div
				className="detail-btn"
				onClick={() => {
					document.getElementById(eventItem.title).scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
				}}
			>
				Details
			</div>
		</div>
	);
};

const Explore = () => {
	return (
		<div className="explore" id="explore">
			<div className="container">
				<div className="title">Events</div>
				<div className="cards">
					{eventsLists.map((eventItem, index) => (
						<ExploreCard key={index} eventItem={eventItem} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Explore;
