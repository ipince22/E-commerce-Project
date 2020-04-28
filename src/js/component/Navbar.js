import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/icons8-iphone-24.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export const Navbar = () => {
	return (
		<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 text-right">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand" />
				</div>
				<ul className="nav navbar-nav">
					<li className="active">
						<Link to="/" className="ml-auto">
							<ButtonContainer>
								<span className="mr-2">
									<i className="fas fa-mobile-alt" />
									Products
								</span>
							</ButtonContainer>
						</Link>
					</li>
					<li className="active">
						<Link to="/cart" className="ml-auto">
							<ButtonContainer>
								<span className="mr-2">
									<i className="fas fa-cart-plus" />
									My Cart
								</span>
							</ButtonContainer>
						</Link>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-brand navbar-right">
					<li>
						<Link to="/login" className="ml-auto">
							<ButtonContainer>
								<span className="mr-2">
									<i className="fas fa-user-plus" /> Sign Up
								</span>
							</ButtonContainer>
						</Link>
					</li>
					<li>
						<Link to="/login" className="ml-auto">
							<ButtonContainer>
								<span className="mr-2">
									<i className="fas fa-sign-in-alt" /> Login
								</span>
							</ButtonContainer>
						</Link>
					</li>
				</ul>
			</div>
		</NavWrapper>
	);
};

const NavWrapper = styled.nav`
	background: #009ffd;
	.nav-link {
		color: #fffaf0 !important;
		font-size: 1.3rem;
		text-transform: capitalize !important;
	}
`;

//background: var(--mainBlue);
