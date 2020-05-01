import React, { useState } from "react";
import { ProductConsumer } from "../../store/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../../component/Button";
import PropTypes from "prop-types";

export const Details = () => {
	return (
		<ProductConsumer>
			{value => {
				const {
					id,
					title,
					img,
					price,
					company,
					info,
					inCart,
					video
				} = value.detailProduct;

				return (
					<div className="container py-5">
						{/*title */}
						<div className="row">
							<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
								<h1>{title}</h1>
							</div>
						</div>
						{/*end title */}

						{/*Product info */}
						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<img
									src={img}
									className="img-fluid"
									alt="product"
								/>
								<div className="video-container">
									<iframe
										width="100%"
										height="315"
										src={video}
										frameBorder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
							</div>
							{/*Product text */}
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<h2>model: {title}</h2>
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
									made by:
									<span className="text-uppercase">
										{company}
									</span>{" "}
								</h4>
								<h4 className="text-blue">
									<strong>
										Price:
										<span>$</span> {price}
									</strong>
								</h4>
								<p className="text-capitalize font-weight-bold mt-3 mb-0">
									some info about product:
								</p>
								<p className="text-muted lead">{info}</p>
								{/*buttons */}
								<div>
									<Link to="/">
										<ButtonContainer>
											Back to Products
										</ButtonContainer>
									</Link>
									<ButtonContainer
										cart
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id); //04-29 daniel
											value.openModal(id);
										}}>
										{inCart ? "in Cart" : "Add to cart"}
									</ButtonContainer>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
};

Details.propTypes = {
	id: PropTypes.number,
	company: PropTypes.string,
	img: PropTypes.string,
	info: PropTypes.string,
	price: PropTypes.number,
	title: PropTypes.string,
	inCart: PropTypes.bool
};
