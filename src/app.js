class MainAppRender extends React.Component{
	constructor(props){
		super(props);
		this.removeAlloption = this.removeAlloption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options : []
		}
	}
	removeAlloption(){
		this.setState(() => {
			return{
				options : []
			};
		})
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

		this.setState((prevState) => {
			return{
				options : prevState.options.concat(option)
			};
		})
	}
	render(){
		const title="App Title";
		const subtitle="App Sub Title";

		return(
		  <div>	
			<Header title={title} subtitle={subtitle} />
			<Button 
				hasOption={this.state.options.length > 0} 
				pickrandom={this.handlePick}
			/>
			<Options 
				options={this.state.options} 
				removealloption={this.removeAlloption}
			/>
			<AddOption handleAddOption={this.handleAddOption} />
		  </div>		
		)
	};
}


class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		)
	}
}

class Button extends React.Component{
	render(){
		return(
			<div>
				<button onClick={this.props.pickrandom} disabled={!this.props.hasOption}>What Shpuld I Do?</button>
			</div>
		);
	}
}

class Options extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<button onClick={this.props.removealloption}>Remove All Option</button>
				<p>Here Are your Options</p>
				{
					this.props.options.map((element) => <Option key={element} optionValue={element} />)
				}
			</div>
		);
	}
}

class Option extends React.Component{
	render(){
		return(
			<div>
				{this.props.optionValue}
			</div>
		);
	}
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
		const value = e.target.elements.addtext.value;
		const error = this.props.handleAddOption(value);
		
		this.setState(() => {
			return{
				error: error
			};
		})
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

ReactDOM.render(<MainAppRender />, document.getElementById('app'));