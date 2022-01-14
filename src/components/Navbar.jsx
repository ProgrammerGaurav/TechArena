import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<img src="assets/logo.svg" alt="" />
				<a href="/" className="navbar-brand">
					TechArena
				</a>
				<div className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/">Contact</Link>
					<Link to="/">Contact</Link>
					<Link to="/">Contact</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
