console.log('App js is running');

const app = {
	title : 'Indecision APP!',
	subtitle : 'First react APP',
	options : []
}
// JSX - JavsScript XML

const formSubmit = (e) => {
	e.preventDefault();
	let value = e.target.elements.addtext.value;
	if(value){
		app.options.push(value);	
	}
	e.target.elements.addtext.value = '';
	render();
}

const user = {
	name : 'ilyas',
	age : 26,
	location : 'India'
};
function getlocation(location){
	if(location){
		return <p>Location: {location}</p>;
	}
}
const template2 = (
	<div>
		<h1>Name : {user.name ? user.name : 'Anonymus'}</h1>
		{(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
		{getlocation(user.location)}
	</div>	
);

const appRoot = document.getElementById('app');

const removeoption = () => {
	app.options = [];
	render();
}

let pickoption = () => {
	const rendomoption = Math.floor(Math.random() * app.options.length);
	const selectedoption = app.options[rendomoption];
	alert(selectedoption);
}
const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<p>{app.subtitle}</p>
			<button disabled={app.options.length === 0} onClick={pickoption}>What Should I Do?</button>
			<ol>
			  {
			  	app.options.map((number) => <li key={number}>{number}</li>)
			  }
			</ol>
			<form onSubmit={formSubmit}>
				<input type="text" name="addtext" />
				<button type="submit">Submit</button>
				<button type="button" onClick={removeoption}>Remove All Options</button>
			</form>
		</div>	
	);
	ReactDOM.render(template, appRoot);
}

render();