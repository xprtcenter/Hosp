import React from "react";

import FormPage from "../../component/formPage/formPage.component";
import smedata from "./smemenudata";

class SmeHomePage extends React.Component {
	constructor() {
		super();
		this.state = smedata;
	}
	render() {
		const { history, match, location } = this.props;
		return (
			<>
				<FormPage
					data={this.state.smeMenu}
					history={history}
					match={match}
					location={location}
				/>
			</>
		);
	}
}

export default SmeHomePage;
