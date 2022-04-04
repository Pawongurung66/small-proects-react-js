import React, { Component } from 'react'
class Form extends Component {
   render() {
      return (
         <form action="#" onSubmit={this.props.submitFunc}>
            <label htmlFor="text" className='mt-4 mb-0 d-block'>Enter a Number</label>
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"  maxlength = "1" onChange={this.props.changeInput} name="number" type="text" className='form-control' />
            <button type="submit" className="suffle btn btn-success mt-3">Submit Number</button>
         </form >
      )
   }
}

export default Form