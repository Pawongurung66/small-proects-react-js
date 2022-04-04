import React, { Component } from 'react'
import { VscTrash } from "react-icons/vsc";
import { TiEdit } from "react-icons/ti";

class Product extends Component {
   render() {
      return (
         <tr>
            <th>{this.props.productDataInfo.id}</th>
            <td><img src={this.props.productDataInfo.imgURL} alt="" /></td>
            <td>{this.props.productDataInfo.name}</td>
            <td>{this.props.productDataInfo.size}</td>
            <td>{this.props.productDataInfo.color}</td>
            <td>Rs {this.props.productDataInfo.price}</td>
            <td>
               <div className="trash svg-icon d-inline-block me-4" onClick={() => this.props.handleDel(this.props.productDataInfo.id)}>
                  <VscTrash />
               </div>
               <div className="edit svg-icon d-inline-block"><TiEdit /></div>
            </td>
         </tr>
      )
   }
}

export default Product