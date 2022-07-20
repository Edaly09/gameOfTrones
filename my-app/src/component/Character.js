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
				{this.props.name}
			</p>
           <img>
		       {this.props.img}
		   </img>			
        </>   
		
		)
	}
}

export default Character