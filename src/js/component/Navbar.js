import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						Products
					</Link>
				</li>
			</ul>
		</nav>
	);
};