import React from 'react';
import Option from './Option';

const Options = (props) => {
	return(
		<div>
			<button onClick={props.removealloption}>Remove All Option</button>
			{props.options.length === 0 && <p>Please add some item to get started.</p>}
			<p>Here Are your Options</p>
			{
				props.options.map((element) => 
					<Option 
						key={element} 
						optionValue={element} 
						handleDeleteoption={props.removeSingleoption}
					/>
				)
			}
		</div>
	);
}

export default Options;