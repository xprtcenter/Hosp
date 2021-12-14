import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./list-table/list-table.styles.scss";

import { firestore } from "../../firebase/firebase.utils";

const ContractorMasterList = () => {
	const initialState = {
		mydata: [],
	};

	const [data, setData] = useState(initialState);

	useEffect(() => {
		const db = firestore
			.collection("smeData")
			.doc("smeContractorCompanyMaster")
			.collection("smeCompanyDetails");

		const newData = db.orderBy("companyName", "asc").onSnapshot((items) => {
			let mydata = [];

			items.forEach((item) => {
				let id = item.id;
				let data = item.data();
				mydata.push({
					id: id,
					companyName: data.companyName,
				});
			});

			setData({
				mydata: mydata,
			});
		});
		console.log("Testing newData from sme", newData);
	}, []);

	/* 
	const handleEdit(id) {
		console.log(id);
	} */

	const defaultImage =
		"https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png";

	return (
		<>
			<h3>Table Data Here</h3>
			<table className="table-page">
				<thead>
					<tr className="table-header">
						<th>Company Name</th>

						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.mydata.map((item) => (
						<tr className="table-data-row">
							<td className="emp-code">{item.companyName}</td>
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
		</>
	);
};

export default ContractorMasterList;
