import React from 'react'
import Character from './component/Character'

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
}
render() {
  console.log(this.state) 
  return(
      <>
      <Character title="Game of thrones"/>
      <Character name={this.state.fullName}/>
      <Character image={this.state.imageUrl}/>

     {this.state.characters.map((Character)=>(
      
       <p>
        {Character.firstName} {Character.lastName}
       
       </p> 

  
   
     ))}

    </>
		)
	}
}

export default App