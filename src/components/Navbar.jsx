import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	let navigate = useNavigate();
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

		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				navigate("/");
			});
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navigate]);

	return (
		<nav className={isScrolled || isOpen ? "navbar navbar-scrolled" : "navbar"}>
			<div className="container">
				<img src="assets/logo.svg" alt="" />
				<a href="#landing" className="navbar-brand">
					TechArena
				</a>
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
					<Link to="/about">About</Link>
					<a href="#footer">Contact</a>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
