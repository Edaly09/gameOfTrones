import { wait } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Chararater from './component/Character'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      characters: []
    }
  }
 async componentDidMount(){

 const requet = await fetch("https://thronesapi.com/api/v2/Characters")
 const result = await requet.json()
 console.log(result)
 this.setState({
  characters: result
})
console.log(this.state)
 }
	render() {
		return(
      <>
			<h1>Game of thrones </h1>
     <p>{this.props.content} </p>
    </>
		)
	}
}

export default App