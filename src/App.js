import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SmeHomePage from "./pages/smePages/smeHomePage.component";

import UserProfile from "./pages/user/user-profile.component";
import PayrollHomePage from "./pages/payrollPages/payrollHomePage.component";

import Header from "./component/header/header.component";
import Footer from "./component/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
	unsubscriveFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscriveFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscriveFromAuth();
	}

	render() {
		return (
			<div className="main-container">
				<header>
					<Header />
				</header>
				<div className="page-container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/profile" component={UserProfile} />

						<Route
							path="/shop"
							render={() =>
								this.props.currentUser ? (
									<ShopPage />
								) : (
									<Redirect to="/signin" />
								)
							}
						/>
						<Route
							path="/sme"
							render={() =>
								this.props.currentUser ? (
									<SmeHomePage />
								) : (
									<Redirect to="/signin" />
								)
							}
						/>

						<Route path="/payroll" component={PayrollHomePage} />
						<Route
							path="/checkout"
							render={() =>
								this.props.currentUser ? (
									<CheckoutPage />
								) : (
									<Redirect to="/signin" />
								)
							}
						/>
						<Route
							exact
							path="/signin"
							render={() =>
								this.props.currentUser ? (
									<Redirect to="/" />
								) : (
									<SignInAndSignUpPage />
								)
							}
						/>
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
