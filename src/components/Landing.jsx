import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className="landing" id="landing">
			<div className="bg"></div>
			<div className="title">Tech Arena</div>
			<div className="subtitle">Feburary 4 & 5</div>
			<div className="buttons">
				<a
					href="/"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({
							top: document.getElementById("explore").offsetTop - 100,
							left: 0,
							behavior: "smooth",
						});
					}}
				>
					Explore
				</a>
				<Link to="/register">register</Link>
			</div>
		</div>
	);
};

export default Landing;
