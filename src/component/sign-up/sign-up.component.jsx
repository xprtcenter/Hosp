import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
			userType: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword, userType } =
			this.state;

		if (userType == null) {
			alert("please select user type");
			return;
		}
		if (password !== confirmPassword) {
			alert("password dosn't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserProfileDocument(user, { displayName, userType });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
				userType: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};
	radioChecked = (event) => {
		// const { value, checked } = event.target;

		this.setState({ userType: event.target.value });
	};

	render() {
		const { displayName, email, password, confirmPassword, userType } =
			this.state;

		return (
			<div className="sign-up">
				<h2 className="title">I do not have a account</h2>
				<span>Sign up with your email and password</span>

				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<div className="radio">
						<div className="select-option">Selected option is : {userType}</div>

						<label>
							<input
								type="radio"
								value="Hospital"
								checked={userType === "Hospital"}
								onChange={this.radioChecked}
								required
							/>
							Hospital
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Vender"
								checked={userType === "Vender"}
								onChange={this.radioChecked}
								required
							/>
							Vender
						</label>
					</div>

					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>

					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>

					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignUp;
