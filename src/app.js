console.log('app.js is running');

//import subtract, { square, add } from './utils.js';

/*console.log(square(4));
console.log(add(10,2));
console.log(subtract(15,10));*/

import React from 'react';
import ReactDOM from 'react-dom';
import MainAppRender from './components/MainApp';

/*const User = (props) => {
	return(
		<div>
			<p>Name : {props.name}</p>
			<p>Age : {props.age}</p>
		</div>
	);
}
<User name="Ilyas" age={26} />*/

ReactDOM.render(<MainAppRender />, document.getElementById('app'));