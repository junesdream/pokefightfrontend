import React from "react";
import "./Navigation.css";
import { SiPokemon } from "react-icons/si";

const Navigation = () => {
	return (
		<div className="navigation_container">
			{" "}
			<nav className="main-nav">
				<div className="logo-box">
					<SiPokemon className="logo-icon"/>
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
					<li>
						<form className="searchbar">
							<input
								type="text"
								placeholder="Search.."
								name="search"
							/>
							<button type="submit">
								<i class="fa fa-search"></i>
							</button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
