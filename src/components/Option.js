import React from 'react';

const Option = (props) => {
	return(
		<div>
			{props.optionValue}
			<button 
				onClick={(e) => {
					props.handleDeleteoption(props.optionValue);
				}}>
				Remove
			</button>
		</div>
	);
}

export default Option;