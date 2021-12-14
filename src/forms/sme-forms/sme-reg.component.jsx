import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
// import { firebase } from "../../firebase/firebasetest";
import "./sme-reg.styles.scss";

class SMERegistration extends React.Component {
	constructor(props) {
		super(props);
		//state
		this.state = {
			name: "",
			mobile: "",
		};

		//bind
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		// const smeForm = {
		// 	name: this.state.name,
		// 	mobile: this.state.mobile,
		// };

		// firebase.push(smeForm);

		this.setState({
			name: "",
			mobile: "",
		});
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="mainform">
				<h2> Please fill the form carefully</h2>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						value={this.state.name}
						handleChange={this.handleChange}
						label="Name"
						required
					/>

					<FormInput
						name="mobile"
						type="text"
						value={this.state.mobile}
						handleChange={this.handleChange}
						label="Mobile"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Submit</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SMERegistration;
