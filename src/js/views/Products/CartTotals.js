import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PaypalButton from "../Paypal/PaypalButton";

export const CartTotals = props => {
	const { cartSubtotal, cartTax, cartTotal, clearCart } = props.totalObject;
	//console.log("props.totalObject", props.totalObject);
	//console.log("cartSubtotal-", cartSubtotal);
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="./">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								onClick={() => {
									clearCart();
								}}>
								Clear Cart
							</button>
						</Link>
						<h5>
							<span className="text-title">SubTotal:</span>
							<strong>$ {cartSubtotal}</strong>
						</h5>
						<h5>
							<span className="text-title">Tax:</span>
							<strong>$ {cartTax}</strong>
						</h5>
						<h5>
							<span className="text-title">Total:</span>
							<strong>$ {cartTotal}</strong>
						</h5>
						<PaypalButton total={cartTotal} clearCart={clearCart} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

CartTotals.propTypes = {
	totalObject: PropTypes.array
};
