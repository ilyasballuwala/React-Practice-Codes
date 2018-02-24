import React from 'react';
import Header from './Header';
import Button from './Button';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class MainAppRender extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
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
	removeAlloption = () => {
		this.setState(() => ({ options: [] }));
		/*this.setState(() => {
			return{
				options : []
			};
		})*/
	}
	handleRemoveModal = () => {
		this.setState(() => ({ selectedOption: undefined }));
	}
	removeSingleoption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => {
				return option !== opt;
			})
		}));
	}
	handlePick = () => {
        const selectedoption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[selectedoption]; 		
		this.setState(() => ({
            selectedOption: option
		}));
	}
	handleAddOption = (option) => {
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
			<div className="container">
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
				<OptionModal selectedOption={this.state.selectedOption} handleRemoveModal={this.handleRemoveModal} />
			</div>
		  </div>		
		)
	};
}

MainAppRender.defaultProps = {
	options : []
}	

