import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./img/Netflix_Logo_RGB.png";

const Nav = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img className="nav__logo" src={logo} alt="Netflix logo" />
			<img
				className="nav__avtar"
				src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				alt="Netflix logo"
			/>
		</div>
	);
};

export default Nav;
