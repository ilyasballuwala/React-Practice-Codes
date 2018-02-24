import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error : undefined
    }
	formSubmit = (e) => {
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