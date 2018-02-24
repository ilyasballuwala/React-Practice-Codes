import React from 'react';

const Option = (props) => (
	<div>
		{props.count}.{props.optionValue}
		<button 
			className="button button__link"
			onClick={(e) => {
				props.handleDeleteoption(props.optionValue);
			}}>
			Remove
		</button>
	</div>
);

export default Option;