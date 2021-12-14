import React from "react";
import FormInput from "../../../component/form-input/form-input.component";
import CustomButton from "../../../component/custom-button/custom-button.component";
import ModuleDataService from "../module-service";

class ModuleCreation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ModuleName: "",
			MPath: "",
			icon: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		let ModuleData = {
			ModuleName: this.state.ModuleName,
			MPath: this.state.MPath,
			icon: this.state.icon,
		};

		ModuleDataService.create(ModuleData)
			.then(() => {
				alert("Created new item successfully!");
				this.setState({
					ModuleName: "",
					MPath: "",
					icon: "",
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
		const { ModuleName, MPath, icon } = this.state;

		return (
			<div className="form-main-container">
				<h2 className="title">Module Registration form</h2>
				<span>Register your module.</span>

				<form
					className="contractor-registration-form"
					onSubmit={this.handleSubmit}
				>
					<FormInput
						type="text"
						name="ModuleName"
						value={ModuleName}
						onChange={this.handleChange}
						label="Module Name"
						required
					/>

					<FormInput
						type="text"
						name="MPath"
						value={MPath}
						onChange={this.handleChange}
						label="Module Path"
						required
					/>

					<FormInput
						type="text"
						name="icon"
						value={icon}
						onChange={this.handleChange}
						label="Icon"
						required
					/>

					<CustomButton type="submit">SUBMIT</CustomButton>
				</form>
			</div>
		);
	}
}
export default ModuleCreation;
