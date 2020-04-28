import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/icons8-iphone-24.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export const Navbar = () => {
	return (
		<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 text-right">
			<Link to="/" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i class="fas fa-mobile-alt" />
						Products
					</span>
				</ButtonContainer>
			</Link>

			<Link to="/login" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">Sign In / Register</span>
				</ButtonContainer>
			</Link>

			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i className="fas fa-cart-plus" />
						My Cart
					</span>
				</ButtonContainer>
			</Link>
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
