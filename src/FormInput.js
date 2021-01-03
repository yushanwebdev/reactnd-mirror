import React, { Component } from 'react';

class FormInput extends Component {
  	state = {
    	value: ''
    }

	updateInputVal = (event) => {
    	this.setState(() => ({
        	value: event.target.value
        }))
    }
  
	render() {
      	const { value } = this.state
    	return(
        	<div className="container">
          		<input 
          			type="text" 
          			placeholder="Say Something" 
          			value={value} 
					onChange={this.updateInputVal} 
				/>
          		<p className="echo">Echo:</p>
          		<p>{value}</p>
        	</div>
        )
    }
}

export default FormInput;