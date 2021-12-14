import React from "react";
import Select from "react-select";
import "./form-dropdown.styles.scss";

const FormDropDown = (props) => {
	return (
		<div className="group">
			<Select
				className="form-dropdown"
				placeholder={props.placeholder}
				name={props.name}
				onChange={props.onChange}
				options={props.data}
			/>
		</div>
	);
};

export default FormDropDown;
