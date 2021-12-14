import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { firestore } from "../../firebase/firebase.utils";
import "./user-profile.styles.scss";

class UserProfile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		/* const db = firestore
			.collection("payrollData")
			.doc("payrollDeduction")
			.collection("payrollDeductionEntry");

		let sData = {
			displayName: this.state.employeeName,
			month: this.state.month,
		};

		db.add(sData)
			.then(() => {
				console.log("Created new item successfully!");
				this.setState({
					employeeName: "",
					month: "",
				});
			})
			.catch((e) => {
				console.log(e);
			}); */
	};
	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<>
				<h2 className="text-header">Profile Settings</h2>
				<form className="custom-form" onSubmit={this.handleSubmit}>
					<FormInput type="text" label="Name" value="" />

					<FormInput type="text" label="Mobile Number" value="" />

					<FormInput type="text" label="Address" value="" />

					<FormInput type="text" label="Postcode" value="" />

					<FormInput type="text" label="State" value="" />

					<FormInput type="text" label="Area" value="" />

					<FormInput type="text" label="Email ID" value="" />

					<FormInput type="text" label="Education" value="" />

					<FormInput type="text" label="Country" value="" />

					<FormInput type="text" value="" label="State/Region" />

					<CustomButton>Save Profile</CustomButton>
				</form>
			</>
		);
	}
}

export default UserProfile;
