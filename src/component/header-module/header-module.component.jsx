import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import HeaderMenuItem from "./header-menu-item.component";
import headerdata from "../header/headerdata";

class HeaderModules extends React.Component {
	constructor(currentUser) {
		super();

		this.state = {
			currentUser: currentUser,
			headerdata,
			ActiveModule: "",
		};
	}
	handleForUpdate(someArg) {
		this.setState({ ActiveModule: someArg });
	}
	render(props) {
		var handleForUpdate = this.handleForUpdate;
		return (
			<>
				{this.state.headerdata.sections.map(({ id, ...otherSectionProps }) => (
					<HeaderMenuItem
						handleForUpdate={handleForUpdate.bind(this)}
						key={id}
						ActiveModule={this.state.ActiveModule}
						{...otherSectionProps}
					/>
				))}
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(HeaderModules);
