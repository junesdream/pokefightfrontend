import React from "react";
import "./Footer.css";
import {
	FaFacebook,
	FaPinterest,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaTiktok,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer_container">
			<div className="footer-element">
				<div className="footer-element-label">Pokemon Shop </div>
				<p>Pokeon 1</p>
				<p>Pokemon 2</p>
				<p>Pekomon 3</p>
				<p>Pekomon 4</p>
			</div>
			<div className="footer-element">
				<div className="footer-element-label">Pokemon im Web</div>
				<p>github</p>
				<p>react</p>
				<p>image diretory</p>
				<p>web master</p>
			</div>
			<div className="footer-element">
				<div className="footer-element-label">social media</div>
				<div className="social-icons">
					<FaFacebook className="social-icon icon-facebook" />
					<FaTwitter className="social-icon icon-twitter" />
					<FaPinterest className="social-icon icon-pinterest" />
					<FaLinkedin className="social-icon icon-linkedin" />
					<FaYoutube className="social-icon icon-youtube" />
					<FaTiktok className="social-icon icon-tiktok" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
