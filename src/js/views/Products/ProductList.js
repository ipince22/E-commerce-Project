import React, { useState } from "react";
import { Product } from "./Product";
import { ProductConsumer } from "../../store/context";
import img1 from "../../../img/c1.jpg";
export const ProductList = () => {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-lg-4 text-center">
						<img
							src={img1}
							className="img-fluid max-width: 100% height: auto;"
						/>
					</div>
				</div>
			</div>

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

					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
							<div className="video-container">
								<iframe
									width="100%"
									height="315"
									src="https://www.youtube.com/embed/H4p6njjPV_o"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
						<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
							<div className="video-container">
								<iframe
									width="100%"
									height="315"
									src="https://www.youtube.com/embed/SQIbeAk-bFA"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
