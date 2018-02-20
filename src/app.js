class MainAppRender extends React.Component{
	constructor(props){
		super(props);
		this.removeAlloption = this.removeAlloption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.removeSingleoption = this.removeSingleoption.bind(this);
		this.state = {
			options : props.options
		}
	}
	//lifecycle methods
	componentDidMount(){
		try
		{
			const tempoptions = localStorage.getItem('savedoption');
			const savedoption = JSON.parse(tempoptions);
			if(savedoption){
				this.setState(() => ({ options: savedoption }))
			}
		}
		catch(e){
			// Exception goes here	
		}
		
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('savedoption', json);
		}
	}
	componentWillUnmount(){
		console.log('component unmount');
	}
	removeAlloption(){
		this.setState(() => ({ options: [] }));
		/*this.setState(() => {
			return{
				options : []
			};
		})*/
	}
	removeSingleoption(option){
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => {
				return option !== opt;
			})
		}));
	}
	handlePick(){
		const selectedoption = Math.floor(Math.random() * this.state.options.length);		
		alert(this.state.options[selectedoption]);
	}
	handleAddOption(option){
		console.log(option);
		if(!option){
			return `Please enter the option value`;
		} else if (this.state.options.indexOf(option) > -1){
			return `Option already exist`;
		}

		this.setState((prevState) => ({ options : prevState.options.concat(option) }));
	}
	render(){
		//const title="App Title";
		const subtitle="App Sub Title";

		return(
		  <div>	
			<Header subtitle={subtitle} />
			<Button 
				hasOption={this.state.options.length > 0} 
				pickrandom={this.handlePick}
			/>
			<Options 
				options={this.state.options} 
				removealloption={this.removeAlloption}
				removeSingleoption={this.removeSingleoption}
			/>
			<AddOption handleAddOption={this.handleAddOption} />
		  </div>		
		)
	};
}

MainAppRender.defaultProps = {
	options : []
}

const Header = (props) => {
	return(
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	)
}

Header.defaultProps = {
	title : 'Indecision'
}

const Button = (props) => {
	return(
		<div>
			<button onClick={props.pickrandom} disabled={!props.hasOption}>What Should I Do?</button>
		</div>
	);
}

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

class AddOption extends React.Component{
	constructor(props){
		super(props);
		this.formSubmit = this.formSubmit.bind(this);
		this.state ={
			error : undefined
		}
	}
	formSubmit(e){
		e.preventDefault();
		const value = e.target.elements.addtext.value.trim();
		const error = this.props.handleAddOption(value);
		
		this.setState(() => ({ error }));
		if(!error){
			e.target.elements.addtext.value = '';
		}
	}
	render(){
		return(
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.formSubmit}>
					<input type="text" name="addtext" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

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