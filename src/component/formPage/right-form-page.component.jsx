import { Route, Switch } from "react-router-dom";
import PayrollEmpRegMaster from "../../forms/Payroll-forms/paroll-employee-registration.component";
import PayrollEmpList from "../../forms/Payroll-forms/emp-list.component";
import PayrollDashboardPage from "../../forms/Payroll-forms/payroll-dashboard";
import SMEDashboardPage from "../../forms/sme-forms/sme-dashboard";
import ContractorMaster from "../../forms/sme-forms/contractor-master.component";
import ContractorEmployeeEntry from "../../forms/sme-forms/contractor-employee-entry.component";
import ContractorMasterList from "../../forms/sme-forms/contractor-master-list.component";
import PayrollDeductionEntry from "../../forms/Payroll-forms/payroll-deduction-entry.component";

const RightFormPageContainer = () => {
	return (
		<div className="form-main-container">
			<Switch>
				<Route
					exact
					path="/payroll/PayrollEmpRegMaster"
					render={() => <PayrollEmpRegMaster />}
				/>
				<Route
					exact
					path="/payroll/PayrollEmpRegMaster/:id"
					render={() => <PayrollEmpRegMaster />}
				/>
				<Route
					exact
					path="/payroll/PayrollEmpList"
					component={PayrollEmpList}
				/>
				<Route
					exact
					path="/payroll/dedentry"
					component={PayrollDeductionEntry}
				/>
				<Route exact path="/sme/smeconmaster" component={ContractorMaster} />
				<Route
					exact
					path="/sme/smeconempentry"
					component={ContractorEmployeeEntry}
				/>
				<Route exact path="/sme/smecontlist" component={ContractorMasterList} />
				<Route exact path="/payroll" component={PayrollDashboardPage} />
				<Route exact path="/sme" component={SMEDashboardPage} />
			</Switch>
		</div>
	);
};

export default RightFormPageContainer;
