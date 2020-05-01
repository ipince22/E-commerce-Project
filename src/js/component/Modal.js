import React, { useState } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../store/context";
import { ButtonContainer } from "../component/Button";
import { Link } from "react-router-dom";

export const Modal = () => {
	const [modalOpen, setmodalOpen] = useState();
	const [Modal, setModal] = useState([]);

	return (
		<ProductConsumer>
			{value => {
				const { modalOpen, closeModal } = value;
				//setmodalOpen(true);
				const { img, title, price } = value.Modal; //img
				//console.log("modal", value);
				if (!modalOpen) {
					return null;
				} else {
					return (
						<ModalContainer>
							<div className="container">
								<div className="row">
									<div
										id="modal"
										className="col-8 mx-auto col-md-6 col-lg-6 col-lg-4 text-center text-capitalize">
										<h5 className="text-success">
											{"Item Added To Cart"}
										</h5>
										<img
											src={img}
											className="img-fluid"
											alt="product"
										/>
										<h5 className="text-muted">
											Product : {title}
										</h5>
										<h5 className="text-muted">
											price : ${price}
										</h5>
										<Link to="/">
											<ButtonContainer
												onClick={() => {
													closeModal();
												}}>
												Store
											</ButtonContainer>
										</Link>
										<Link to="/cart">
											<ButtonContainer
												cart
												onClick={() => {
													//value.addToCart(id); //04.29 daniel
													closeModal();
												}}>
												go to cart
											</ButtonContainer>
										</Link>
									</div>
								</div>
							</div>
						</ModalContainer>
					);
				}
			}}
		</ProductConsumer>
	);
};

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		background: #f3f3f3;
	}
`;
