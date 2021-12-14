import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../../component/card-icon/card-icon.component";
import logo from "../../assets/swami2.png";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import HeaderModules from "../header-module/header-module.component";
import avtar from "../../assets/avatar.png";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import HeaderDateTime from "./Timer.component";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
	//console.log("Test CurrentUser from header", currentUser.photoURL);
	return (
		<div className="main-header">
			<div className="header1">
				<h4>VIVEKANANDA KENDRA BORL HOSPITAL</h4>
				<h4>
					<HeaderDateTime />
				</h4>
			</div>
			<div className="header">
				<Link to="/">
					<div className="logo-container">
						<img src={logo} alt="swamiji" />

						<span className="text">HOME</span>
					</div>
				</Link>
				<div className="nav-options .nav__menu">
					{currentUser ? <HeaderModules /> : null}

					{currentUser ? (
						<div className="nav-option menu-item-dropdown">
							<span>
								{auth.currentUser.photoURL !== null ? (
									<img
										className="avatar"
										src={auth.currentUser.photoURL}
										alt="avatar"
									/>
								) : (
									<img className="avatar" src={avtar} alt="avatar" />
								)}

								{auth.currentUser.email}
							</span>
							<Submenu />
						</div>
					) : (
						<Link className="nav-option" to="/signin">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{hidden ? null : <CartDropdown />}
			</div>
		</div>
	);
};
class Submenu extends React.Component {
	render() {
		return (
			<div className="nav__submenu">
				<Link className="nav-option drop" to="/profile">
					PROFILE
				</Link>
				<Link className="nav-option drop" to="/setting">
					SETTING
				</Link>
				<div
					className="nav-option drop"
					onClick={() => {
						const confirmBox = window.confirm(
							"Do you really want to SIGN OUT?",
						);
						if (confirmBox) {
							auth.signOut();
						}
					}}
				>
					SIGN OUT
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
