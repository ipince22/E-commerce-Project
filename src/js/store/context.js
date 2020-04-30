import React, { useState, useEffect } from "react";
import { storeProducts, storedetailsProduct } from "../store/data";
import PropTypes from "prop-types";
const ProductContext = React.createContext();

export const ProductProvider = props => {
	const [products, setProducts] = useState([]); //storeProducts
	const [detailProduct, setDetailProduct] = useState(storedetailsProduct); //
	const [cart, setCart] = useState([]);
	const [modalOpen, setmodalOpen] = useState(false);
	const [Modal, setModal] = useState(storedetailsProduct);
	const [cartSubtotal, setcartSubtotal] = useState(0);
	const [cartTax, setcartTax] = useState(0);
	const [cartTotal, setcartTotal] = useState(0);
	const [isSignedIn, setisSignedIn] = useState(false);
	useEffect(() => {
		getProducts();
	}, []);

	function getProducts() {
		let tempProducts = [];
		storeProducts.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		setProducts(tempProducts);
		return products;
	}

	const getItem = id => {
		const product = products.find(item => item.id === id);
		//console.log("getItem()", product);
		return product;
	};

	const handleDetails = id => {
		const product = getItem(id);
		setDetailProduct(product);
		//console.log("handleDetails()", detailProduct);
		return detailProduct;
	};
	const addToCart = id => {
		let tempProducts = [...products];
		const index = tempProducts.indexOf(getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		setProducts(tempProducts);
		setCart(cart => [...cart, product]);

		//let tempcart2 = [...cart];
		//tempcart2.push(product);
		//setCart([...tempcart2]);
		addTotals();
		return { products, cart };
	};

	const openModal = id => {
		setmodalOpen(true);
		const product = getItem(id);
		setModal(product);
		return { Modal, modalOpen };
	};
	const closeModal = () => {
		setmodalOpen(false);
		return modalOpen;
	};
	const increment = id => {
		//console.log("cart...", [...cart]);
		let tempCart = [...cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.count * product.price;
		setCart([...tempCart]);
		addTotals();
		return cart;
	};
	const decrement = id => {
		let tempCart = [...cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;
		if (product.count === 0) {
			removeItem(id);
		} else {
			product.total = product.count * product.price;
			setCart([...tempCart]);
			addTotals();
			return cart;
		}
	};
	const removeItem = id => {
		let tempProducts = [...products];
		let tempCart = [...cart];
		tempCart = tempCart.filter(item => item.id !== id);
		const index = tempProducts.indexOf(getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		setProducts([...tempProducts]);
		setCart([...tempCart]);
		addTotals();

		return { products, cart };
	};
	const clearCart = () => {
		let tempclearCart = [];
		setCart(tempclearCart);

		getProducts();
		addTotals();

		return cart;
	};

	const addTotals = () => {
		let temp = [...cart];
		let subTotal = 0;
		temp.map(item => {
			subTotal += item.total;
		});
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		setcartSubtotal(subTotal);
		setcartTax(tax);
		setcartTotal(total);
		return { cartSubtotal, cartTax, cartTotal };
	};

	return (
		<ProductContext.Provider
			value={{
				modalOpen,
				Modal,
				cart,
				products,
				detailProduct,
				handleDetails,
				addToCart,
				openModal,
				closeModal,
				increment,
				decrement,
				removeItem,
				clearCart,
				cartSubtotal,
				cartTax,
				cartTotal,
				addTotals,
				isSignedIn,
				setisSignedIn
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};
export const ProductConsumer = ProductContext.Consumer;
//export {ProductProvider,ProductConsumer};

ProductProvider.propTypes = {
	children: PropTypes.node
};
