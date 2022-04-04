import React, { Component } from 'react'
import Form from './Form'

class GuessingGame extends Component {

   constructor() {
      super();

      this.state = {
         initalNumber: 0,
         randomNumber: 0,
      }
   }

   handleChange = (e) => {
      let inputValue =parseInt(e.target.value)

      this.setState({
         initalNumber: inputValue,
      })

   }

   handleNumberGenerator = (e) => {
      e.preventDefault();

      let randomNumberCalculated = Math.floor(Math.random() * 8)
      
      this.setState({
         randomNumber: randomNumberCalculated
      })

      setTimeout(() => {
         if (this.state.initalNumber === this.state.randomNumber) {
            alert('You won the game')
         } else {
            alert('sorry try again')
         }
      }, 800);

   }


   render() {
      return (
         <div className="wrapper">
            <h2 className="random-number">{this.state.randomNumber}</h2>
            <p>Guess the number between 1 to 9 and enter it in field below.</p>
            <Form submitFunc={this.handleNumberGenerator} changeInput={this.handleChange} />
         </div >
      )
   }
}

export default GuessingGame