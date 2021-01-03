import React, { Component } from 'react';

class FormInput extends Component {
  	state = {
    	value: ''
    }

	updateInputVal = (text) => {
    	this.setState(() => ({
        	value: text
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
					onChange={(event) => this.updateInputVal(event.target.value)} 
				/>
          		<p className="echo">Echo:</p>
          		<p>{value}</p>
        	</div>
        )
    }
}

export default FormInput;