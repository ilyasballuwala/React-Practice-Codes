import React from 'react';

const Button = (props) => {
	return(
		<div>
			<button onClick={props.pickrandom} disabled={!props.hasOption}>What Should I Do?</button>
		</div>
	);
}

export default Button;