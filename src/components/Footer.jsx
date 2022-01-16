import React from "react";

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="title">Contact us</div>
			<div className="socials">
				<a className="card" href="/">
					<i className="far fa-envelope"></i>
				</a>
				<a className="card" href="/">
					<i className="fab fa-instagram"></i>
				</a>
				<a className="card" href="/">
					<i className="fas fa-phone"></i>
				</a>
			</div>
			<div className="copyright">Copyright &copy; TechArena {new Date().getFullYear()}</div>
		</div>
	);
};

export default Footer;
