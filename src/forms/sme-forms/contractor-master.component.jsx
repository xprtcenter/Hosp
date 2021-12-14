import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import SMEDataService from "./sme.service";
import { firestore } from "../../firebase/firebase.utils";

class ContractorMaster extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
			companyName: "",
			venderCode: "",
			supervisorName: "",
			supervisorContact: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const db = firestore
			.collection("smeData")
			.doc("smeContractorCompanyMaster")
			.collection("smeCompanyDetails");

		let sData = {
			displayName: this.state.displayName,
			email: this.state.email,
			password: this.state.password,
			companyName: this.state.companyName,
			venderCode: this.state.venderCode,
			supervisorName: this.state.supervisorName,
			supervisorContact: this.state.supervisorContact,
		};

		db.add(sData)
			.then(() => {
				console.log("Created new item successfully!");
				this.setState({
					displayName: "",
					email: "",
					password: "",
					confirmPassword: "",
					companyName: "",
					venderCode: "",
					supervisorName: "",
					supervisorContact: "",
				});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const {
			displayName,
			email,
			password,
			confirmPassword,
			companyName,
			venderCode,
			supervisorName,
			supervisorContact,
		} = this.state;

		return (
			<div className="form-main-container">
				<h2 className="title">Contractor/Company Registration form</h2>
				<span>Register your company for login credential.</span>

				<form
					className="contractor-registration-form"
					onSubmit={this.handleSubmit}
				>
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

					<FormInput
						type="text"
						name="companyName"
						value={companyName}
						onChange={this.handleChange}
						label="Company Name"
						required
					/>
					<FormInput
						type="text"
						name="venderCode"
						value={venderCode}
						onChange={this.handleChange}
						label="Vender Code"
					/>

					<FormInput
						type="text"
						name="supervisorName"
						value={supervisorName}
						onChange={this.handleChange}
						label="Supervisor Name"
						required
					/>
					<FormInput
						type="text"
						name="supervisorContact"
						value={supervisorContact}
						onChange={this.handleChange}
						label="Supervisor Contact No."
						required
					/>

					<CustomButton type="submit">SUBMIT</CustomButton>
				</form>
			</div>
		);
	}
}
export default ContractorMaster;
