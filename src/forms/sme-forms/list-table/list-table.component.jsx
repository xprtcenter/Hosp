import React from "react";
import "./list-table.style.scss";

const List = ({ item }) => {
	const {
		id,
		EmployeeCode,
		EmployeeName,
		EmployeeEmail,
		PayrollCompanyName,
		EmployeeAddress,
		EmployeeContact,
		EmployeeImgUrl,
	} = item;
	const defaultImage =
		"https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png";
	console.log(EmployeeImgUrl);
	return (
		<>
			<tr className="table-data-row">
				<td className="emp-code">{EmployeeCode}</td>
				<td className="table-image-container">
					<img
						src={EmployeeImgUrl ? EmployeeImgUrl : defaultImage}
						alt="dummyimg"
					/>
				</td>
				<td>{EmployeeName}</td>
				<td>{EmployeeEmail}</td>
				<td>{PayrollCompanyName}</td>
				<td>{EmployeeAddress}</td>
				<td>{EmployeeContact}</td>
				<td>
					<button className="button-edit">Edit</button>
					<button className="button-delete">Delete</button>
				</td>
			</tr>
		</>
	);
};

export default List;
