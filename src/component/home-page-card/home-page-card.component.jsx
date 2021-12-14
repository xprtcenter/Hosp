import React from "react";
import "./home-page-card.styles.scss";

const CustomHomeCard = ({ data }) => (
	<div className="card-box">
		<div className="cards">
			{data.map((item) => (
				<div className="card">
					<div className="card-content">
						<p>{item.value}</p>
					</div>
					<cardfooter>{item.label}</cardfooter>
				</div>
			))}
		</div>
	</div>
);

export default CustomHomeCard;
