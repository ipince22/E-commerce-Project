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
					<div
						key={item.id}
						className=" list-group-item list-group-item-action">
						<CartItem
							key={item.id}
							cartItem={item}
							cartValue={props.cartObject}
						/>
					</div>
				);
			})}
		</div>
	);
};

CartList.propTypes = {
	cartObject: PropTypes.array
};
