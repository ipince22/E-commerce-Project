import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 bg-primary text-center text-light">
		<div className="container">
			<ul className="list-unstyled list-inline text-center">
				<li className="list-inline-item">
					<a className="btn-floating btn-fb mx-1">
						<i className="fab fa-facebook-f"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-tw mx-1">
						<i className="fab fa-twitter"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-gplus mx-1">
						<i className="fab fa-google-plus-g"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-li mx-1">
						<i className="fab fa-linkedin-in"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-dribbble mx-1">
						<i className="fab fa-dribbble"> </i>
					</a>
				</li>
			</ul>
		</div>
		<div>
			<cite>
				Shopping Cart 2020 Designed By{" "}
				<a
					className="text-white"
					href="https://portfolio.ipince22.now.sh/">
					<i className="fab fa-github" />
					Daniel
				</a>{" "}
				,{" "}
				<a className="text-white" href="https://github.com/B-Quintana">
					<i className="fab fa-github-square" />
					Benny
				</a>{" "}
				and{" "}
				<a className="text-white" href="https://github.com/yusbel86">
					<i className="fab fa-github-alt" />
					Yusbel
				</a>
			</cite>
		</div>
	</footer>
);
