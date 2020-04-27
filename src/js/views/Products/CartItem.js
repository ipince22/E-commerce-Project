import React from "react";
import PropTypes from "prop-types";

export const CartItem = props => {
	const { id, title, img, price, total, count } = props.cartItem;
	const { increment, decrement, removeItem } = props.cartValue;

	return (
		<div className="row my-1 text-capitalize text-center">
			<div className="col-10 mx-auto col-lg-2">
				<img
					src={img}
					style={{ width: "5rem", height: "5rem" }}
					className="img-fluid"
					alt="product"
				/>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">product:</span>
				{title}
			</div>

			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">price:</span>
				{price}
			</div>

			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center" />
				<span
					className="btn btn-black mx-1"
					onClick={() => {
						if (count > 1) decrement(id);
					}}>
					-
				</span>
				<span className="btn btn-black mx-1">{count}</span>

				<span
					className="btn btn-black mx-1"
					onClick={() => {
						increment(id);
					}}>
					+
				</span>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div
					className="cart-icon"
					onClick={() => {
						removeItem(id);
					}}>
					<i className="fas fa-trash" />
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>
					item total :$
					{total}
				</strong>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	cartItem: PropTypes.array,
	cartValue: PropTypes.array
};

//
