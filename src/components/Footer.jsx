import React from "react";

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="title">Contact us</div>
			<div className="socials">
				<a className="card" href="mailto:rjcstecharena2k19@gmail.com">
					<i className="far fa-envelope"></i>
				</a>
				<a className="card" href="https://www.instagram.com/techarena2022" target="_blank" rel="noreferrer">
					<i className="fab fa-instagram"></i>
				</a>
				<a className="card" href="tel:9969372757">
					<i className="fas fa-phone"></i>
				</a>
			</div>
			<div className="copyright">Copyright &copy; TechArena {new Date().getFullYear()}</div>
		</div>
	);
};

export default Footer;
