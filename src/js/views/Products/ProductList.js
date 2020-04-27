import React, { useState } from "react";
import { Product } from "./Product";
import { ProductConsumer } from "../../store/context";
export const ProductList = () => {
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					{/*<Title name="our" title="products" />*/}
					<h1 className="text-primary text-center text-title text-uppercase text-muted mt-3 mb-2">
						Our Products
					</h1>
					<div className="row">
						<ProductConsumer>
							{value => {
								//console.log(value);

								return value.products.map(product => {
									//console.log(product);
									return (
										<Product
											key={product.id}
											id={product.id}
											img={product.img}
											inCart={product.inCart}
											price={product.price}
											title={product.title}
											//product={product}
											//***consultar hernan
										/>
									);
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
