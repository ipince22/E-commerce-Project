import React, { useState } from "react";
import { CartItem } from "./CartItem";
import PropTypes from "prop-types";

export const CartList = props => {
	const { cart, addTotals } = props.cartObject;
	//console.log("CartList=props.cartObject:", props.cartObject);
	addTotals();

	return (
		<div className="container-fluid">
			{cart.map(item => {
				return (
					<CartItem
						key={item.id}
						cartItem={item}
						cartValue={props.cartObject}
					/>
				);
			})}
		</div>
	);
};

CartList.propTypes = {
	cartObject: PropTypes.array
};
