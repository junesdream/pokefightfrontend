import React from "react";
import "./Navigation.css";
import { FaFortAwesome } from "react-icons/fa";

const Navigation = () => {
	return (
		<div className="navigation_container">
			{" "}
			Nav
			<nav className="main-nav">
				<div
					className="logo-box"
					img
					src="https://i2.wp.com/hipfonts.com/wp-content/uploads/2020/07/pokemon-logo-1.png?resize=730%2C548&quality=99&ssl=1"
				>
					<FaFortAwesome className="logo-icon" />
					<span className="logo-text-1">poke </span>
					<span className="logo-text-2">fight</span>
				</div>
				<ul>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/">POKEMON</a>
					</li>
					<li>
						<a href="/">PLAY</a>
					</li>
					<li>
						<a href="/">RANGLISTE</a>
					</li>
					<li>
						<a href="/">LOGIN/REG</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
