import React from 'react';
import Option from './Option';

const Options = (props) => (
	<div>
		<button className="button button__link" onClick={props.removealloption}>Remove All Option</button>
		{props.options.length === 0 && <p>Please add some item to get started.</p>}
		<p>Here Are your Options</p>
		{
			props.options.map((element, index) => 
				<Option 
					key={element} 
					count={index + 1}
					optionValue={element} 
					handleDeleteoption={props.removeSingleoption}
				/>
			)
		}
	</div>
);

export default Options;