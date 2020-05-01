import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img1 from "../../../img/checked-checkbox-32.png";
import imgpaypal from "../../../img/pp_cc_mark_111x69.jpg";
import { ButtonContainer } from "../../component/Button";

export const Payment = props => {
	console.log("msg:", props.msg);

	return (
		<React.Fragment>
			<br />
			<br />

			<div className="container">
				<div className="row text-center">
					<div className="col-lg-12 col-lg-4 text-center">
						<img src={img1} />
						<h5 className="text-success">
							The payment was succeeded!
						</h5>
					</div>
					<div className="col-lg-12 col-lg-4 text-center">
						<Link to="/">
							<ButtonContainer>Continue Shopping</ButtonContainer>
						</Link>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />

			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};
Payment.propTypes = {
	payment: PropTypes.object,
	msg: PropTypes.string,
	history: PropTypes.object
};
