import "./form-sidebar-menu.styles.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const FormSidebarMenu = ({ history, match, menuName, menuUrl }) => {
	return (
		<div className="sidebar-menu">
			<Link className="list" to={`${match.url}/${menuUrl}`}>
				{menuName}
			</Link>
		</div>
	);
};

export default withRouter(FormSidebarMenu);
