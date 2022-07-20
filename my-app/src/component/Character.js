import React from 'react'
import App from '../App'

class Character extends React.Component {
	render() {
		return(
	   <>
			<h1>
				{this.props.title}
			 </h1>
			<p>
				{this.props.name} {this.props.last}

			</p>
			
        <p>{this.props.titi}</p>

        </>   
		
		)
	}
}

export default Character