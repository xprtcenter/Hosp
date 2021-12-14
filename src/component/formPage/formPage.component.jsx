import React from "react";
import "./formPage.styles.scss";
import FormSidebarMenu from "../form-sidebar-menu/form-sidebar-menu.component";

import RightFormPageContainer from "../../component/formPage/right-form-page.component";

const FormPage = ({ data, match }) => {
	return (
		<div className="form-page">
			<div className="leftside-menu-block">
				{data.map(({ id, ...otherProps }) => (
					<FormSidebarMenu key={id} {...otherProps} />
				))}
			</div>
			<div className="rightside-main-section">
				<RightFormPageContainer match={match} />
			</div>
		</div>
	);
};

export default FormPage;
