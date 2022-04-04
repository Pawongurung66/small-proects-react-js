import React, { Component } from 'react'

class Counter extends Component {
   constructor() {

      super();

      this.state = {
         value: 0,
      }
   }

   handlePlus = () => {
      this.setState({
         value: this.state.value + 1
      })

   }

   reset = () => {
      this.setState({
         value: 0
      })
   }

   handleSub = () => {
      if (this.state.value > 0) {
         this.setState({
            value: this.state.value - 1
         })
      }
   }

   render() {
      return (
         <div className="counter d-flex align-items-center justify-content-center">
            <div className="add btn btn-success" onClick={() => this.handlePlus()}>+</div>
            <div className="value px-4">{this.state.value}</div>
            <div className="add btn btn-success" onClick={() => this.handleSub()}>-</div>
            <div className="btn btn-primary mx-5" onClick={() => this.reset()}>Reset</div>
         </div>
      )
   }
}

export default Counter