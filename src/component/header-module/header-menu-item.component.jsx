import React from "react";

import { withRouter } from "react-router-dom";

const HeaderMenuItem = ({
	title,
	linkUrl,
	history,
	match,
	handleForUpdate,
	ActiveModule,
}) => {
	console.log("Location Test", linkUrl);

	return (
		<div
			className={
				ActiveModule.toLowerCase() === linkUrl.toLowerCase()
					? "nav-option active"
					: "nav-option"
			}
			onClick={() => {
				history.push(`${match.url}${linkUrl}`);
				handleForUpdate(linkUrl);
			}}
		>
			{title}
		</div>
	);
};

export default withRouter(HeaderMenuItem);
