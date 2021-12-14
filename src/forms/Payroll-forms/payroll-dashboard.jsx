import React from "react";
import CustomHomeCard from "../../component/home-page-card/home-page-card.component";
import { payrollDashboardOption } from "./payroll-dashboard-data";
const PayrollDashboardPage = () => {
	return (
		<>
			<h1>Payroll Dashboard</h1>

			<CustomHomeCard data={payrollDashboardOption.name} />
		</>
	);
};

export default PayrollDashboardPage;
