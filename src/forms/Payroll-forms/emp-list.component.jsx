import React from "react";
import { Link } from "react-router-dom";
import "./list-table/list-table.style.scss";
import "./paroll-employee-registration.styles.scss";

import { firestore } from "../../firebase/firebase.utils";

class PayrollEmpList extends React.Component {
	constructor() {
		super();
		this.onDataChange = this.onDataChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.state = {
			mydata: [],
		};

		this.unsubscribe = undefined;
	}

	componentDidMount() {
		const db = firestore
			.collection("payrollData")
			.doc("payrollEmpRegistration")
			.collection("payrollEmployee");

		this.unsubscribe = db
			.orderBy("PayrollCompanyName", "asc")
			.onSnapshot(this.onDataChange);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}
	handleEdit(id) {
		console.log(id);
	}
	onDataChange(items) {
		let mydata = [];

		items.forEach((item) => {
			let id = item.id;
			let data = item.data();
			mydata.push({
				id: id,
				EmployeeCode: data.EmployeeCode,
				EmployeeName: data.EmployeeName,
				EmployeeEmail: data.EmployeeEmail,
				PayrollCompanyName: data.PayrollCompanyName,
				EmployeeAddress: data.EmployeeAddress,
				EmployeeContact: data.EmployeeContact,
				EmployeeImgUrl: data.EmployeeImgUrl,
			});
		});

		this.setState({
			mydata: mydata,
		});
	}

	render() {
		const { mydata } = this.state;
		const defaultImage =
			"https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png";
		console.log(mydata.EmployeeImgUrl);
		return (
			<table className="table-page">
				<thead>
					<tr className="table-header">
						<th>Employee Code</th>
						<th>Employee Image</th>
						<th>Employee Name</th>
						<th>Email</th>
						<th>Company Name</th>
						<th>Address</th>
						<th>Contact</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{mydata.map((item) => (
						<tr className="table-data-row">
							<td className="emp-code">{item.EmployeeCode}</td>
							<td className="table-image-container">
								<img
									src={item.EmployeeImgUrl ? item.EmployeeImgUrl : defaultImage}
									alt="dummyimg"
								/>
							</td>
							<td>{item.EmployeeName}</td>
							<td>{item.EmployeeEmail}</td>
							<td>{item.PayrollCompanyName}</td>
							<td>{item.EmployeeAddress}</td>
							<td>{item.EmployeeContact}</td>
							<td>
								<Link to={`/payroll/PayrollEmpRegMaster/${item.id}`}>
									<button className="button-edit">Edit</button>
								</Link>
								<button className="button-delete">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default PayrollEmpList;
