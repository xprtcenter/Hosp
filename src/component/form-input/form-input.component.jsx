import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input
			className={`${
				otherProps.value.length ? "date-picker-after" : "date-picker"
			} form-input`}
			onChange={handleChange}
			{...otherProps}
		/>
		{label ? (
			<label
				className={`${
					otherProps.value.length ? "shrink" : ""
				} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);
export default FormInput;
