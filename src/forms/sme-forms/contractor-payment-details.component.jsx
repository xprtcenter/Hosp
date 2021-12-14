import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import FormDropdown from "../../component/form-dropdown/form-dropdown.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import SMEDataService from "./sme.service";

class ContractorPayment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bankName: "",
			accountNo: "",
			IFSCCode: "",
			Dateofpayment: "",
			Amount: "",
			refNo: "",
			forNoofEmployee: "",
			HCType: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		let sData = {
			bankName: this.state.bankName,
			accountNo: this.state.accountNo,
			IFSCCode: this.state.IFSCCode,
			Dateofpayment: this.state.Dateofpayment,
			Amount: this.state.Amount,
			refNo: this.state.refNo,
			forNoofEmployee: this.state.forNoofEmployee,
			HCType: this.state.HCType,
		};

		SMEDataService.create(sData)
			.then(() => {
				console.log("Created new item successfully!");
				this.setState({
					bankName: "",
					accountNo: "",
					IFSCCode: "",
					Dateofpayment: "",
					Amount: "",
					refNo: "",
					forNoofEmployee: "",
					HCType: "",
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
			bankName,
			accountNo,
			IFSCCode,
			Dateofpayment,
			Amount,
			refNo,
			forNoofEmployee,
			HCType,
		} = this.state;

		return (
			<div className="form-main-container">
				<h2 className="title">Company Registration form</h2>
				<span>Register your company for login credential.</span>

				<form
					className="contractor-registration-form"
					onSubmit={this.handleSubmit}
				>
					<FormInput
						type="text"
						name="bankName"
						value={bankName}
						onChange={this.handleChange}
						label="Bank Name"
						required
					/>
					<FormInput
						type="text"
						name="accountNo"
						value={accountNo}
						onChange={this.handleChange}
						label="Account No"
						required
					/>
					<FormInput
						type="text"
						name="IFSCCode"
						value={IFSCCode}
						onChange={this.handleChange}
						label="IFSC Code"
						required
					/>
					<FormInput
						type="date"
						name="Dateofpayment"
						value={Dateofpayment}
						onChange={this.handleChange}
						label="Date of Payment"
						required
					/>
					<FormInput
						type="text"
						name="Amount"
						value={Amount}
						onChange={this.handleChange}
						label="Ammount"
						required
					/>
					<FormInput
						type="text"
						name="refNo"
						value={refNo}
						onChange={this.handleChange}
						label="Refrence No."
						required
					/>
					<FormInput
						type="text"
						name="forNoofEmployee"
						value={forNoofEmployee}
						onChange={this.handleChange}
						label="For No. of Employee"
						required
					/>
					<FormDropdown
						type="text"
						name="HCType"
						value={HCType}
						onChange={this.handleChange}
						label="Health Checkup Type"
						options={myOptions}
						defaultValue={myOptions[1]}
					/>
					<CustomButton type="submit">SUBMIT</CustomButton>
				</form>
			</div>
		);
	}
}

export default ContractorPayment;
