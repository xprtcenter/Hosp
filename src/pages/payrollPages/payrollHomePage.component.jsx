import React from "react";

import FormPage from "../../component/formPage/formPage.component";
import payrolldata from "./payrollmenudata";
class PayrollHomePage extends React.Component {
	constructor() {
		super();
		this.state = payrolldata;
	}
	render() {
		const { history, match, location } = this.props;

		return (
			<FormPage
				data={this.state.payrollMenu}
				history={history}
				match={match}
				location={location}
			/>
		);
	}
}

export default PayrollHomePage;
