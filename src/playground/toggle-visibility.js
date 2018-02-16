class Tooglediv extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			visible : false
		}
		this.toggleDiv = this.toggleDiv.bind(this);
	}
	toggleDiv(){
		this.setState((prevState) =>{
			return{
				visible : !prevState.visible
			};
		})
	}
	render(){
		return(
			<div>
				<h1>Toggle Example</h1>
				<button onClick={this.toggleDiv}>
					{ this.state.visible ? 'Hide Div' : 'Show Div' }
				</button>
				{ this.state.visible && (
					<div><p>This div is tooglable.</p></div>
				)}
			</div>
		);
	}
}

ReactDOM.render(<Tooglediv />, document.getElementById('app'))