import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav className={isScrolled || isOpen ? "navbar navbar-scrolled" : "navbar"}>
			<div className="container">
				<img src="assets/logo.svg" alt="" />
				<Link to="/" className="navbar-brand">
					TechArena
				</Link>
				<div
					className="toggle"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<i className="fas fa-bars"></i>
				</div>
				<div
					className={isOpen ? "navbar-links navbar-links-active" : "navbar-links"}
					onClick={() => {
						if (window.innerWidth < 992) {
							setIsOpen(!isOpen);
						}
					}}
				>
					<a href="#landing">Home</a>
					<a href="#explore">Events</a>
					<a href="#about">About</a>
					<a href="#footer">Contact</a>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
