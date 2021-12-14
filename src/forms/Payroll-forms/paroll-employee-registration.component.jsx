import React from "react";

import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { firestore } from "../../firebase/firebase.utils";
import ParollEmpRegService from "./payroll-emp-reg-service";

import { storage } from "../../firebase/firebase.utils";
import "./paroll-employee-registration.styles.scss";
import avatar from "../../assets/avatar.png";

import { options } from "./dropdown.option";
import Select from "react-select";
var todayDate = new Date();
//todayDate.setDate(todayDate.getDate() + 2);
var finalDate = todayDate.toISOString().substr(0, 10);
const initialState = {
	Editid: "",
	EmployeeFile: "",
	EmployeeImagePreviewUrl: "",
	EmployeeImgUrl: "",
	EmployeeCode: "",
	EmployeeName: "",
	EmployeeGender: "",
	EmployeeDOB: "",
	EmployeeAddress: "",
	EmployeePAddress: "",
	EmployeeContact: "",
	EmployeeEmail: "",
	EmployeeDepartment: "",
	EmployeeStatusActive: "",
	EmployeeDateofJoining: finalDate,
	EmployeeDateofLeaving: "",
	EmployeeBasicSalary: "",
	EmployeeOnrollContractor: "",
	EmployeeBankName: "",
	EmployeeBankIFSCCode: "",
	EmployeeAccountNo: "",
	EmployeeUANNo: "",
	EmployeeESICNo: "",
	EmployeePANNo: "",
	EmployeeAadharNo: "",
	PayrollCompanyName: "VKBORL Hospital",
	EmployeeImageStatus: "Not Upload",
	TabtoggleState: 1,
};

class PayrollEmpRegMaster extends React.Component {
	constructor(props) {
		super(props);
		console.log("Inside Constructor");
		this.state = initialState;
		this.unsubscribe = undefined;
	}

	componentDidMount() {
		var getidArray = window.location.href.split("/");
		const getIDData = getidArray[getidArray.length - 1];
		const dbRef = firestore.doc(
			`payrollData/payrollEmpRegistration/payrollEmployee/${getIDData}`,
		);

		const EmpData = dbRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log("Document data:", doc.data());
					const newData = doc.data();
					this.setState({
						Editid: getIDData,
						EmployeeImgUrl: newData.EmployeeImgUrl,
						EmployeeCode: newData.EmployeeCode,
						EmployeeName: newData.EmployeeName,
						EmployeeGender: newData.EmployeeGender,
						EmployeeDOB: newData.EmployeeDOB,
						EmployeeAddress: newData.EmployeeAddress,
						EmployeePAddress: newData.EmployeePAddress,
						EmployeeContact: newData.EmployeeContact,
						EmployeeEmail: newData.EmployeeEmail,
						EmployeeDepartment: newData.EmployeeDepartment,
						EmployeeStatusActive: newData.EmployeeStatusActive,
						EmployeeDateofJoining: newData.EmployeeDateofJoining,
						EmployeeDateofLeaving: newData.EmployeeDateofLeaving,
						EmployeeBasicSalary: newData.EmployeeBasicSalary,
						EmployeeOnrollContractor: newData.EmployeeOnrollContractor,
						EmployeeBankName: newData.EmployeeBankName,
						EmployeeBankIFSCCode: newData.EmployeeBankIFSCCode,
						EmployeeAccountNo: newData.EmployeeAccountNo,
						EmployeeUANNo: newData.EmployeeUANNo,
						EmployeeESICNo: newData.EmployeeESICNo,
						EmployeePANNo: newData.EmployeePANNo,
						EmployeeAadharNo: newData.EmployeeAadharNo,
						PayrollCompanyName: newData.PayrollCompanyName,
						EmployeeImagePreviewUrl: newData.EmployeeImgUrl,
					});
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}

	handleImageUpload = (image) => {
		if (image) {
			const uploadTask = storage
				.ref(`PayrollEmployeeImages/${image.name}`)
				.put(image);

			uploadTask.on(
				"state_changes",
				(snapshot) => {},
				(error) => {
					console.log(error);
				},
				() => {
					storage
						.ref("PayrollEmployeeImages")
						.child(image.name)
						.getDownloadURL()
						.then((url) => {
							console.log(url);
							this.setState({
								EmployeeImgUrl: url,
								EmployeeImageStatus: "Upload Successfully",
							});
						});
				},
			);
		} else {
			alert("Please Select Image");
		}
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		if (this.state.EmployeeImgUrl) {
			let sData = {
				EmployeeImgUrl: this.state.EmployeeImgUrl,
				EmployeeCode: this.state.EmployeeCode,
				EmployeeName: this.state.EmployeeName,
				EmployeeGender: this.state.EmployeeGender,
				EmployeeDOB: this.state.EmployeeDOB,
				EmployeeAddress: this.state.EmployeeAddress,
				EmployeePAddress: this.state.EmployeePAddress,
				EmployeeContact: this.state.EmployeeContact,
				EmployeeEmail: this.state.EmployeeEmail,
				EmployeeDepartment: this.state.EmployeeDepartment,
				EmployeeStatusActive: this.state.EmployeeStatusActive,
				EmployeeDateofJoining: this.state.EmployeeDateofJoining,
				EmployeeDateofLeaving: this.state.EmployeeDateofLeaving,
				EmployeeBasicSalary: this.state.EmployeeBasicSalary,
				EmployeeOnrollContractor: this.state.EmployeeOnrollContractor,
				EmployeeBankName: this.state.EmployeeBankName,
				EmployeeBankIFSCCode: this.state.EmployeeBankIFSCCode,
				EmployeeAccountNo: this.state.EmployeeAccountNo,
				EmployeeUANNo: this.state.EmployeeUANNo,
				EmployeeESICNo: this.state.EmployeeESICNo,
				EmployeePANNo: this.state.EmployeePANNo,
				EmployeeAadharNo: this.state.EmployeeAadharNo,
				PayrollCompanyName: this.state.PayrollCompanyName,
			};
			if (!this.state.Editid) {
				ParollEmpRegService.create(sData)
					.then(() => {
						alert("Created new Employee successfully!");
						this.setState(initialState);
					})
					.catch((e) => {
						console.log(e);
					});
			} else {
				ParollEmpRegService.update(this.state.Editid, sData)
					.then(() => {
						alert("Employee Update successfully!");
						this.setState(initialState);
					})
					.catch((e) => {
						console.log(e);
					});
			}
		} else {
			alert("Please Upload Image first");
		}
	};

	handleImage = (e) => {
		e.preventDefault();

		let EmployeeFile = e.target.files[0];

		if (EmployeeFile !== undefined) {
			let reader = new FileReader();
			reader.onloadend = () => {
				this.setState({
					EmployeeFile: EmployeeFile,
					EmployeeImagePreviewUrl: reader.result,
				});
			};

			reader.readAsDataURL(EmployeeFile);
		} else {
			this.setState({
				EmployeeFile: "",
				EmployeeImagePreviewUrl: "",
				EmployeeImgUrl: "",
				EmployeeImageStatus: "Not Upload",
			});
			alert("Please select Image");
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const {
			EmployeeFile,
			EmployeeImagePreviewUrl,
			EmployeeCode,
			EmployeeName,
			EmployeeGender,
			EmployeeDOB,
			EmployeeAddress,
			EmployeePAddress,
			EmployeeContact,
			EmployeeEmail,
			EmployeeDepartment,
			EmployeeStatusActive,
			EmployeeDateofJoining,
			EmployeeDateofLeaving,
			EmployeeBasicSalary,
			EmployeeOnrollContractor,
			EmployeeBankName,
			EmployeeBankIFSCCode,
			EmployeeAccountNo,
			EmployeeUANNo,
			EmployeeESICNo,
			EmployeePANNo,
			EmployeeAadharNo,
			EmployeeImageStatus,
			TabtoggleState,
		} = this.state;

		return (
			<>
				<h2 className="form-title">Employee Registration form</h2>

				<form
					className="employee-registration-form"
					onSubmit={this.handleSubmit}
				>
					<div className="container">
						<div className="bloc-tabs">
							<div
								className={TabtoggleState === 1 ? "tabs active-tabs" : "tabs"}
								onClick={() => this.setState({ TabtoggleState: 1 })}
							>
								Basic Info
							</div>
							<div
								className={TabtoggleState === 2 ? "tabs active-tabs" : "tabs"}
								onClick={() => this.setState({ TabtoggleState: 2 })}
							>
								Joining Info
							</div>
							<div
								className={TabtoggleState === 3 ? "tabs active-tabs" : "tabs"}
								onClick={() => this.setState({ TabtoggleState: 3 })}
							>
								Bank Info
							</div>
						</div>
						<div className="content-tabs">
							<div
								className={
									TabtoggleState === 1 ? "content  active-content" : "content"
								}
							>
								<h3>Basic Information </h3>
								<div className="image-form-page">
									<div className="image-container">
										<div className="imgPreview">
											{EmployeeImagePreviewUrl ? (
												<img src={EmployeeImagePreviewUrl} alt="" />
											) : (
												<img src={avatar} alt="" />
											)}
										</div>
										<div className="status">
											<h4>{EmployeeImageStatus}</h4>
										</div>
										<input type="file" onChange={this.handleImage} />
										<div
											className="button-upload"
											onClick={() => this.handleImageUpload(EmployeeFile)}
										>
											Upload
										</div>
									</div>
									<div className="form-container">
										<FormInput
											type="number"
											name="EmployeeCode"
											value={EmployeeCode || ""}
											onChange={this.handleChange}
											label="Employee Code"
											required
										/>
										<FormInput
											type="text"
											name="EmployeeName"
											value={EmployeeName || ""}
											onChange={this.handleChange}
											label="Employee Name"
											required
										/>
										<Select
											className="form-dropdown"
											placeholder="Select Gender"
											value={
												options.Gender.find(
													(obj) => obj.value === EmployeeGender,
												) || ""
											} // set selected value
											options={options.Gender} // set list of the data
											onChange={(e) => {
												this.setState({ EmployeeGender: e.value });
											}} // assign onChange function
										/>

										<FormInput
											type="date"
											label="Date of Birth"
											name="EmployeeDOB"
											value={EmployeeDOB || ""}
											onChange={this.handleChange}
											required
										/>
										<FormInput
											type="text"
											name="EmployeeAddress"
											value={EmployeeAddress || ""}
											onChange={this.handleChange}
											label="Employee Address"
											required
										/>
										<FormInput
											type="text"
											name="EmployeePAddress"
											value={EmployeePAddress || ""}
											onChange={this.handleChange}
											label="Permanent Address"
											required
										/>
										<FormInput
											type="text"
											name="EmployeeContact"
											value={EmployeeContact || ""}
											onChange={this.handleChange}
											label="Employee Contact"
											required
										/>
										<FormInput
											type="email"
											name="EmployeeEmail"
											value={EmployeeEmail || ""}
											onChange={this.handleChange}
											label="Email Address"
											required
										/>
									</div>
								</div>
							</div>

							<div
								className={
									TabtoggleState === 2 ? "content  active-content" : "content"
								}
							>
								<h3>Joining Information </h3>
								<div className="form-container">
									<Select
										className="form-dropdown"
										placeholder="Select Department"
										value={
											options.Department.find(
												(obj) => obj.value === EmployeeDepartment,
											) || ""
										} // set selected value
										options={options.Department} // set list of the data
										onChange={(e) => {
											this.setState({ EmployeeDepartment: e.value });
										}} // assign onChange function
									/>
									<Select
										className="form-dropdown"
										placeholder="Active or De-active"
										value={
											options.Active.find(
												(obj) => obj.value === EmployeeStatusActive,
											) || ""
										} // set selected value
										options={options.Active} // set list of the data
										onChange={(e) => {
											this.setState({ EmployeeStatusActive: e.value });
										}} // assign onChange function
									/>
									<FormInput
										type="date"
										name="EmployeeDateofJoining"
										value={EmployeeDateofJoining || ""}
										onChange={this.handleChange}
										label="Date of Joining"
										required
									/>
									<FormInput
										type="date"
										name="EmployeeDateofLeaving"
										value={EmployeeDateofLeaving || ""}
										onChange={this.handleChange}
										label="Date of Leaving"
									/>
									<FormInput
										type="text"
										name="EmployeeESICNo"
										value={EmployeeESICNo || ""}
										onChange={this.handleChange}
										label="ESIC No"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeUANNo"
										value={EmployeeUANNo || ""}
										onChange={this.handleChange}
										label="UAN No"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeBasicSalary"
										value={EmployeeBasicSalary || ""}
										onChange={this.handleChange}
										label="Basic Salary"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeOnrollContractor"
										value={EmployeeOnrollContractor || ""}
										onChange={this.handleChange}
										label="Onroll or Contractor"
										required
									/>
								</div>
							</div>

							<div
								className={
									TabtoggleState === 3 ? "content  active-content" : "content"
								}
							>
								<h3>Bank Information </h3>
								<div className="form-container">
									<FormInput
										type="text"
										name="EmployeePANNo"
										value={EmployeePANNo || ""}
										onChange={this.handleChange}
										label="PAN No"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeAadharNo"
										value={EmployeeAadharNo || ""}
										onChange={this.handleChange}
										label="Aadhar No"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeBankName"
										value={EmployeeBankName || ""}
										onChange={this.handleChange}
										label="Bank Name"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeBankIFSCCode"
										value={EmployeeBankIFSCCode || ""}
										onChange={this.handleChange}
										label="IFSC Code"
										required
									/>
									<FormInput
										type="text"
										name="EmployeeAccountNo"
										value={EmployeeAccountNo || ""}
										onChange={this.handleChange}
										label="Account No"
										required
									/>
								</div>
								<CustomButton type="submit">SUBMIT</CustomButton>
							</div>
						</div>
					</div>
				</form>
			</>
		);
	}
}
export default PayrollEmpRegMaster;
