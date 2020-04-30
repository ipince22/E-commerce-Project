import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../store/context";
import PropTypes from "prop-types";

//******INSTALL */
//npm install -g requirejs

export const Product = props => {
	//console.log(props.img);
	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
				<ProductConsumer>
					{value => (
						<div
							className="img-container p-5"
							onClick={() => value.handleDetails(props.id)}>
							<Link to="/details">
								<img
									//src={require("./img/product-3.png")}
									src={props.img}
									alt="Product"
									className="card-img-top"
								/>
							</Link>
							<button
								className="cart-btn"
								disabled={props.inCart ? true : false}
								onClick={() => {
									//value.addToCart(props.id);//04.29 daniel
									value.openModal(props.id);
								}}>
								{props.inCart ? (
									<p
										className="text-capitalize mb-0"
										disabled>
										in Cart
									</p>
								) : (
									<i className="fas fa-cart-plus" />
								)}
							</button>
						</div>
					)}
				</ProductConsumer>
				{/* card footer */}
				<div className="card-footer d-flex justify-content-between">
					<p className="text-primary font-weight-normal">
						{props.title}
					</p>
					<h5 className="text-blue font-italic mb-0">
						<span className="badge badge-pill badge-success mr-1">
							{"$ " + props.price}
						</span>
					</h5>
				</div>
			</div>
		</ProductWrapper>
	);
};

Product.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	img: PropTypes.string,
	price: PropTypes.number,
	company: PropTypes.string,
	info: PropTypes.string,
	inCart: PropTypes.bool,
	count: PropTypes.number,
	total: PropTypes.number
};

/*
		product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		img: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
*/
const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
	}
	.card-footer {
		background: rgba(247, 247, 247);
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}

	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: #009ffd;
		border: none;
		color: #f3f3f3;
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 1s linear;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: #2a2a72;
		cursor: pointer;
	}
`;
