import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<img src="assets/logo.svg" alt="" />
				<a href="/" className="navbar-brand">
					TechArena
				</a>
				<div className="navbar-links">
					<a href="/">Home</a>
					<a href="/">Contact</a>
					<a href="/">Contact</a>
					<a href="/">Contact</a>
					<a href="/">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
