import React from "react";
import initialAboutData from "../data/aboutData";

const About = () => {
	let aboutData = [
		...initialAboutData.slice(0, 8).sort(() => Math.random() - 0.5),
		...initialAboutData.slice(8, initialAboutData.length),
	];
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
								{about.github && (
									<a href={about.github}>
										<i className="fab fa-github"></i>
									</a>
								)}
								{about.instagram && (
									<a href={about.instagram}>
										<i className="fab fa-instagram"></i>
									</a>
								)}
								{about.linkedin && (
									<a href={about.linkedin}>
										<i className="fab fa-linkedin"></i>
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
