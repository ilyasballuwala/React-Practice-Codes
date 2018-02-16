class Counter extends React.Component{
	constructor(props){
		super(props);
		this.incrementOne = this.incrementOne.bind(this);
		this.decrementOne = this.decrementOne.bind(this);
		this.resetCounter = this.resetCounter.bind(this);
		this.state ={
			count : 0
		}	
	}
	incrementOne(){
		this.setState((prevState) => {
			return{
				count : prevState.count + 1
			}
		});
	}
	decrementOne(){
		this.setState((prevState) => {
			return{
				count : prevState.count - 1
			}
		});
	}
	resetCounter(){
		this.setState(() => {
			return{
				count : 0
			}
		});
		/*this.setState((prevState) => {
			return{
				count : prevState.count + 1
			}
		});*/
	}
	render(){
		return(
			<div>
				<h1>Counter : {this.state.count}</h1>
				<button onClick={this.incrementOne}>+1</button>
				<button onClick={this.decrementOne}>-1</button>
				<button onClick={this.resetCounter}>Reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addone = () => {
// 	count++;
// 	renderApp();
// }
// const minusone = () => {
// 	if(count >= 1)
// 		count--;
// 	renderApp();
// }
// const resetcount = () => {
// 	count = 0;
// 	renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
// 	const template3 = (
// 		<div>
// 			<h1>Count : {count}</h1>
// 			<button id="plus-buton" className="button" onClick={addone}>+1</button>
// 			<button id="minus-buton" className="button" onClick={minusone}>-1</button>
// 			<button id="reset-buton" className="button" onClick={resetcount}>Reset</button>
// 		</div>	
// 	);
// 	ReactDOM.render(template3, appRoot);
// }

// renderApp();