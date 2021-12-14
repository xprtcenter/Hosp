import React from "react";
import CustomHomeCard from "../../component/home-page-card/home-page-card.component";
import { smeDashboardOption } from "./sme-dashboard.data";
const SMEDashboardPage = () => {
	return (
		<>
			<h1>SME Dashboard</h1>
			<CustomHomeCard data={smeDashboardOption.name} />
		</>
	);
};

export default SMEDashboardPage;
