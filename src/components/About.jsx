import React from "react";
import aboutData from "../data/aboutData";

const About = () => {
	return (
		<div className="about" id="about">
			<div className="container">
				<div className="title">About Us</div>
				<div className="cards">
					{aboutData.map((about, index) => (
						<div className="card" key={index}>
							<img src={`/assets/profile/${about.img}`} alt="" />
							<div className="title">{about.name}</div>
							<div className="subtitle">{about.title}</div>
							<div className="line"></div>
							<div className="socials">
								<a href={about.github}>
									<i className="fab fa-github"></i>
								</a>
								<a href={about.instagram}>
									<i className="fab fa-instagram"></i>
								</a>
								<a href={about.linkedin}>
									<i className="fab fa-linkedin"></i>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
