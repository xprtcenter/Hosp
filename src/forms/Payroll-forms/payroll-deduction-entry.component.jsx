import React, { useState } from "react";
import "./style.scss";
import Select from "react-select";
import { options } from "./dropdown.option";
import FormInput from "../../component/form-input/form-input.component";
import { firestore } from "../../firebase/firebase.utils";
import CustomButton from "../../component/custom-button/custom-button.component";

const PayrollDeductionEntry = () => {
	const initialstste = {
		selectEmployeeName: "",
		employeeName: "",
		month: "",
		employeeID: "",
		department: "",
		fixBasic: "",
		yearofDeduction: "",
		monthofDeduction: "",
		days: "",
		weeklyoff: "",
		coff: "",
		unpaidLeave: "",
		paidLeave: "",
		nonWorkingdays: "",
		totalLeave: "",
		workingDays: "",
		leaveDeduction: "",
		esicEmployee: "",
		esicEmployer: "",
		pfEmployee: "",
		pfEmployer: "",
		professionalTax: "",
		advanceLoan: "",
		vehicleAllownces: "",
		houseAllownces: "",
		totalDeduction: "",
		calculativeBasic: "",
		allowncesOther: "",
		inHandSalary: "",
		ctc: "",
	};

	const [dedData, setDedData] = useState(initialstste);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const db = firestore
			.collection("payrollData")
			.doc("payrollDeduction")
			.collection("payrollDeductionEntry");

		let sData = {
			displayName: dedData.employeeName,
			month: dedData.month,
		};

		db.add(sData)
			.then(() => {
				console.log("Created new item successfully!");
				setDedData({
					initialstste,
				});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setDedData({ [name]: value });
	};
	const {
		selectEmployeeName,
		employeeName,
		month,
		employeeID,
		department,
		fixBasic,
		yearofDeduction,
		monthofDeduction,
		days,
		weeklyoff,
		coff,
		unpaidLeave,
		paidLeave,
		nonWorkingdays,
		totalLeave,
		workingDays,
		leaveDeduction,
		esicEmployee,
		esicEmployer,
		pfEmployee,
		pfEmployer,
		professionalTax,
		advanceLoan,
		vehicleAllownces,
		houseAllownces,
		totalDeduction,
		calculativeBasic,
		allowncesOther,
		inHandSalary,
		ctc,
	} = dedData;
	return (
		<div className="form-main-container">
			<h2 className="title">Deduction Entry form</h2>
			<span>Enter your deduction details.</span>

			<form className="form-container" onSubmit={handleSubmit}>
				<div className="selection-container">
					<Select
						placeholder="Employee Name"
						value={
							options.selectEmployeeName.find(
								(obj) => obj.value === selectEmployeeName,
							) || ""
						} // set selected value
						options={options.selectEmployeeName} // set list of the data
						onChange={(e) => {
							setDedData({ ...dedData, selectEmployeeName: e.value });
						}} // assign onChange function
					/>

					<Select
						placeholder="Employee Name"
						value={options.month.find((obj) => obj.value === month) || ""} // set selected value
						options={options.month} // set list of the data
						onChange={(e) => {
							setDedData({ ...dedData, month: e.value });
						}} // assign onChange function
					/>
				</div>
				<FormInput
					type="text"
					name="employeeName"
					value={employeeName}
					onChange={handleChange}
					label="EMPLOYEE NAME"
					required
				/>
				<FormInput
					type="text"
					name="department"
					value={department}
					onChange={handleChange}
					label="DEPARTMENT"
					required
				/>
				<FormInput
					type="text"
					name="fixBasic"
					value={fixBasic}
					onChange={handleChange}
					label="FIXBASIC"
					required
				/>
				<FormInput
					type="text"
					name="yearofDeduction"
					value={yearofDeduction}
					onChange={handleChange}
					label="YEAR OF DEDUCTION"
					required
				/>
				<FormInput
					type="text"
					name="monthofDeduction"
					value={monthofDeduction}
					onChange={handleChange}
					label="MONTH OF DEDUCTION"
					required
				/>
				<FormInput
					type="text"
					name="days"
					value={days}
					onChange={handleChange}
					label="DAYS"
					required
				/>
				<FormInput
					type="text"
					name="weeklyoff"
					value={weeklyoff}
					onChange={handleChange}
					label="WEEKLY OFF"
					required
				/>
				<FormInput
					type="text"
					name="coff"
					value={coff}
					onChange={handleChange}
					label="C OFF"
					required
				/>
				<FormInput
					type="text"
					name="unpaidLeave"
					value={unpaidLeave}
					onChange={handleChange}
					label="UN PAID LEAVE"
					required
				/>
				<FormInput
					type="text"
					name="paidLeave"
					value={paidLeave}
					onChange={handleChange}
					label="PAID LEAVE"
					required
				/>
				<FormInput
					type="text"
					name="nonWorkingdays"
					value={nonWorkingdays}
					onChange={handleChange}
					label="NON WORKING DAYS"
					required
				/>
				<FormInput
					type="text"
					name="totalLeave"
					value={totalLeave}
					onChange={handleChange}
					label="TOTAL LEAVE"
					required
				/>
				<FormInput
					type="text"
					name="workingDays"
					value={workingDays}
					onChange={handleChange}
					label="WORKING DAYS"
					required
				/>
				<FormInput
					type="text"
					name="leaveDeduction"
					value={leaveDeduction}
					onChange={handleChange}
					label="LEAVE DEDUCTION"
					required
				/>
				<FormInput
					type="text"
					name="esicEmployee"
					value={esicEmployee}
					onChange={handleChange}
					label="ESIC EMPLOYEE"
					required
				/>
				<FormInput
					type="text"
					name="esicEmployer"
					value={esicEmployer}
					onChange={handleChange}
					label="ESIC EMPLOYER"
					required
				/>
				<FormInput
					type="text"
					name="pfEmployee"
					value={pfEmployee}
					onChange={handleChange}
					label="PF EMPLOYEE"
					required
				/>
				<FormInput
					type="text"
					name="pfEmployer"
					value={pfEmployer}
					onChange={handleChange}
					label="PF EMPLOYER"
					required
				/>
				<FormInput
					type="text"
					name="professionalTax"
					value={professionalTax}
					onChange={handleChange}
					label="PROFESSIONAL TAX"
					required
				/>
				<FormInput
					type="text"
					name="advanceLoan"
					value={advanceLoan}
					onChange={handleChange}
					label="ADVANCE LOAN"
					required
				/>
				<FormInput
					type="text"
					name="vehicleAllownces"
					value={vehicleAllownces}
					onChange={handleChange}
					label="VEHICLE ALLOWNCES"
					required
				/>
				<FormInput
					type="text"
					name="houseAllownces"
					value={houseAllownces}
					onChange={handleChange}
					label="HOUSE ALLOWNCES"
					required
				/>
				<FormInput
					type="text"
					name="totalDeduction"
					value={totalDeduction}
					onChange={handleChange}
					label="TOTAL DEDUCTION"
					required
				/>
				<FormInput
					type="text"
					name="calculativeBasic"
					value={calculativeBasic}
					onChange={handleChange}
					label="CALCULATIVE BASIC"
					required
				/>
				<FormInput
					type="text"
					name="allowncesOther"
					value={allowncesOther}
					onChange={handleChange}
					label="ALLOWNCES OTHER"
					required
				/>
				<FormInput
					type="text"
					name="inHandSalary"
					value={inHandSalary}
					onChange={handleChange}
					label="FINAL SALARY"
					required
				/>
				<FormInput
					type="text"
					name="ctc"
					value={ctc}
					onChange={handleChange}
					label="CTC"
					required
				/>

				<CustomButton type="submit">SUBMIT</CustomButton>
			</form>
		</div>
	);
};
export default PayrollDeductionEntry;
